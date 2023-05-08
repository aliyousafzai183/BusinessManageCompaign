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
    retention: 0,
    arpu: 0,
    cac: 0,
    aov: 0,
    totalReceivable: 0,
    totalPayable: 0,
    payroll: 0,
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
    // calculations
    // const totalRevenue = data.reduce((acc, item) => acc + item.totalIncome, 0);
    // const totalExpense = data.reduce((acc, item) => acc + item.costOfSale, 0);
    // const grossProfit = totalRevenue - totalExpense;
    // const netProfit = grossProfit; // assuming payroll is another expense
    // const retention = (new Set(data.map(item => item.previousCustomer)))
    //   .size / data.length;
    // const arpu = totalRevenue / data.length;
    // const cac = totalExpense / data.length;
    // const aov = totalRevenue / (data.reduce((acc, item) => acc + item.numberOfSales, 0) || 1);
    // const totalReceivable = data.reduce((acc, item) => acc + item.accountsReceivable, 0);
    // const totalPayable = data.reduce((acc, item) => acc + item.accountsPayable, 0);
    // const payroll = data.reduce((acc, item) => acc + item.payroll, 0);

    // setMetrics({
    //   totalRevenue,
    //   totalExpense,
    //   grossProfit,
    //   netProfit,
    //   retention,
    //   arpu,
    //   cac,
    //   aov,
    //   totalReceivable,
    //   totalPayable,
    //   payroll
    // });
    console.log(data);
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
            price={0}
            color='#26A69A'
          />
          <HomeBoxComponent
            icon="wallet"
            title="Total Expense"
            price={0}
            color='#FF7043'
          />
          <HomeBoxComponent
            icon="file-invoice-dollar"
            title="Gross Profit"
            price={0}
            color='#8BC34A'
          />
          <HomeBoxComponent
            icon="money-bill-alt"
            title="Net Profit"
            price={0}
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
                title="Retention"
                value={0}
                color="#2196F3"
              />
              <AnalyticComponent
                icon="box-open"
                title="Position"
                value={0}
                color="#4CAF50"
              />
              <AnalyticComponent
                icon="dollar-sign"
                title="ARPU"
                value={0}
                color="#FF9800"
              />
              <AnalyticComponent
                icon="users"
                title="CAC"
                value={0}
                color="#E91E63"
              />
              <AnalyticComponent
                icon="chart-bar"
                title="AOV"
                value={0}
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
              price={0}
              color='#008CBA'
            />
            <ThirdHomeScreenComponent
              icon="money-bill-wave"
              title="Total Payable"
              price={0}
              color='#FF7043'
            />

          </View>
          <View style={styles.innerWrapper}>
            <FourthHomeComponent
              price={0}
              others={0}
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