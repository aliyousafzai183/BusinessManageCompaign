import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, BackHandler, Alert } from 'react-native';

// styles
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HomeScreenStyle as styles } from '../../styles/index';

import GetData from '../../db/data/GetData';
import GetProfileData from '../../db/profile/GetProfileData';
import { useFocusEffect } from '@react-navigation/native';

// component
import {
  HomeBoxComponent, AnalyticComponent,
  ThirdHomeScreenComponent, FourthHomeComponent
} from '../../components/index';
import RouteName from '../../routes/RouteName';

const HomeScreeen = ({ navigation }) => {
  const [showMetrics, setShowMetrics] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [data, setData] = useState([]);

  const [metrics, setMetrics] = useState({
    totalRevenue: 0,
    totalExpense: 0,
    grossProfit: 0,
    netProfit: 0,
    rdp: 0,
    unp: 0,
    arpu: 0,
    cac: 0,
    aov: 0,
    totalReceivable: 0,
    totalPayable: 0,
    payroll:0,
    others: 0,
  });

  useFocusEffect(
    React.useCallback(() => {
      GetData().then(reports => {
        setData(reports);
        checkProfileData();
      }).catch(error => {
        console.log(error);
      });
    }, [])
  );

  useEffect(() => {
    const backAction = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        Alert.alert('Exit App', 'Are you sure you want to exit?', [
          {
            text: 'No',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
        ]);
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      if (backHandler) {
        backHandler.remove();
      }
    };
  }, []);

  // Check if profile data exists
  const checkProfileData = async () => {
    const profileData = await GetProfileData();
    if (profileData) {
      setProfileCompleted(true);
    } else {
      setProfileCompleted(false);
    }
  }


  const handleProfileButton = () => {
    navigation.navigate(RouteName.PROFILE_SCREEN);
  }

  // calculations
  useEffect(() => {
    const totalRevenue = data.reduce((acc, item) => {
      if (item.incomeReport) {
        return acc + item.totalIncome;
      } else {
        return acc;
      }
    }, 0);


    const totalExpense = data.reduce((acc, item) => {
      if (!item.incomeReport) {
        return acc + item.totalIncome;
      } else {
        return acc;
      }
    }, 0);

    const costOfSale = data.reduce((acc, item) => {
      if (item.incomeReport) {
        return acc + item.costOfSale;
      } else {
        return acc;
      }
    }, 0);

    const totalReceivable = data.reduce((acc, item) => {
      if (item.incomeReport && !item.paid) {
        return acc + item.totalIncome;
      } else {
        return acc;
      }
    }, 0);

    const totalPayable = data.reduce((acc, item) => {
      if (!item.incomeReport && !item.paid) {
        return acc + item.totalIncome;
      } else {
        return acc;
      }
    }, 0);

    const calculateRDP = () => {
      const products = new Set();
      let repeatedProducts = 0;

      data.forEach((item) => {
        if (item.incomeReport) {
          if (!products.has(item.itemName)) {
            products.add(item.itemName);
          } else {
            repeatedProducts++;
          }
        }
      });

      const totalProducts = products.size;
      const RDP = totalProducts > 0 ? repeatedProducts / totalProducts : 0;

      return RDP * 100;
    }

    const calculateUNP = () => {
      const products = new Set();
      let repeatedProducts = 0;
    
      data.forEach((item) => {
        if (item.incomeReport) {
          if (!products.has(item.itemName)) {
            products.add(item.itemName);
          } else {
            repeatedProducts++;
          }
        }
      });
    
      const totalProducts = products.size;
      console.log(totalProducts);
      console.log(repeatedProducts);
      const UNP = totalProducts > 0 ? (totalProducts - repeatedProducts) / totalProducts : 0;
    
      return UNP * 100;
    }
    

    const calculateARPU = () => {
      const totalUsers = data.reduce((acc, item) => {
        if (item.incomeReport) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      return totalRevenue / totalUsers;
    }

    const calculateCAC = () => {
      const totalUsers = data.reduce((acc, item) => {
        if (item.incomeReport && item.previousCustomer === 0) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);

      if (totalUsers > 0) {
        return costOfSale / totalUsers;
      } else {
        return 0;
      }
    }

    const calculateAOV = () => {
      const totalOrders = data.filter(item => item.incomeReport).length;
      if (totalOrders > 0) {
        return totalRevenue / totalOrders;
      } else {
        return 0;
      }
    }
    

    const arpu = calculateARPU();

    const grossProfit = totalRevenue - costOfSale;

    const netProfit = grossProfit - totalExpense;

    const payroll = totalExpense;

    const others = costOfSale;

    const rdp = calculateRDP();

    const unp = calculateUNP();
    console.log("unp "+unp);

    const cac = calculateCAC();

    const aov = calculateAOV();

    setMetrics({
      totalRevenue,
      totalExpense,
      grossProfit,
      netProfit,
      rdp,
      unp,
      arpu,
      cac,
      aov,
      totalReceivable,
      totalPayable,
      payroll,
      others
    });
  }, [data]);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
      {
        !profileCompleted
          ?
          <View style={styles.profileButtonContainer}>
            <Text style={styles.profileText}>Your profile is incomplete!</Text>
            <TouchableOpacity
              onPress={handleProfileButton}
            >
              <Text style={styles.buttonText}>
                Lets Complete it
              </Text>
            </TouchableOpacity>
          </View>
          :
          <></>
      }
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.analyticsWrapper}>
          <HomeBoxComponent
            icon="wallet"
            title="Total Revenue"
            price={metrics.totalRevenue}
            color='#26A69A'
          />
          <HomeBoxComponent
            icon="wallet"
            title="Total Expense"
            price={metrics.totalExpense}
            color='#FF7043'
          />
          <HomeBoxComponent
            icon="file-invoice-dollar"
            title="Gross Profit"
            price={metrics.grossProfit}
            color='#8BC34A'
          />
          <HomeBoxComponent
            icon="money-bill-alt"
            title="Net Profit"
            price={metrics.netProfit}
            color='#FFCA28'
          />
        </View>
        <TouchableOpacity
          onPress={() => setShowMetrics(!showMetrics)}
          style={styles.button}
        >
          <Text style={styles.text}>See Your Business Metrics</Text>
          <MaterialIcons name={showMetrics ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={30} color={colors.plusButton} />
        </TouchableOpacity>

        {
          showMetrics ?
            <View style={styles.analyticsWrapper}>
              <AnalyticComponent
                icon="chart-line"
                title="RDP"
                value={metrics.rdp}
                color="#2196F3"
              />
              <AnalyticComponent
                icon="box-open"
                title="UNP"
                value={metrics.unp}
                color="#4CAF50"
              />
              <AnalyticComponent
                icon="dollar-sign"
                title="ARPU"
                value={metrics.arpu}
                color="#FF9800"
              />
              <AnalyticComponent
                icon="users"
                title="CAC"
                value={metrics.cac}
                color="#E91E63"
              />
              <AnalyticComponent
                icon="chart-bar"
                title="AOV"
                value={metrics.aov}
                color="#9C27B0"
              />
            </View>
            :
            <></>
        }

        <View style={[styles.analyticsWrapper, { paddingBottom: '40%' }]}>
          <View style={styles.innerWrapper}>
            <ThirdHomeScreenComponent
              icon="hand-holding-usd"
              title="Total Receivable"
              price={metrics.totalReceivable}
              color='#008CBA'
            />
            <ThirdHomeScreenComponent
              icon="money-bill-wave"
              title="Total Payable"
              price={metrics.totalPayable}
              color='#FF7043'
            />

          </View>
          <View style={styles.innerWrapper}>
            <FourthHomeComponent
              price={metrics.payroll}
              others={metrics.others}
            />
          </View>
          <View>

          </View>
        </View>

      </ScrollView>
    </LinearGradient>
  )
}

export default HomeScreeen;