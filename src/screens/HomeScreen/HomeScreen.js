import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, BackHandler, Alert } from 'react-native';

// styles
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HomeScreenStyle as styles} from '../../styles/index';

// component
import {
  HomeBoxComponent, AnalyticComponent,
  ThirdHomeScreenComponent, FourthHomeComponent
} from '../../components/index';
import RouteName from '../../routes/RouteName';

const { width, height } = Dimensions.get('window');

const HomeScreeen = ({navigation}) => {
  const [showMetrics, setShowMetrics] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);

  useEffect(() => {
    const backAction = () => {
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
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  handleProfileButton = () => {
    navigation.navigate(RouteName.PROFILE_SCREEN);
  }

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
            price={2000}
            color='#26A69A'
          />
          <HomeBoxComponent
            icon="wallet"
            title="Total Expense"
            price={500}
            color='#FF7043'
          />
          <HomeBoxComponent
            icon="file-invoice-dollar"
            title="Gross Profit"
            price={2000}
            color='#8BC34A'
          />
          <HomeBoxComponent
            icon="money-bill-alt"
            title="Net Profit"
            price={1500}
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
                value={27}
                color="#2196F3"
              />
              <AnalyticComponent
                icon="box-open"
                title="Inventory"
                value={0}
                color="#4CAF50"
              />
              <AnalyticComponent
                icon="dollar-sign"
                title="ARPU"
                value={213}
                color="#FF9800"
              />
              <AnalyticComponent
                icon="users"
                title="CAC"
                value={2}
                color="#E91E63"
              />
              <AnalyticComponent
                icon="chart-bar"
                title="AOV"
                value={156}
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
              price={2000}
              color='#008CBA'
            />
            <ThirdHomeScreenComponent
              icon="money-bill-wave"
              title="Total Payable"
              price={500}
              color='#FF7043'
            />

          </View>
          <View style={styles.innerWrapper}>
            <FourthHomeComponent
              price={500}
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