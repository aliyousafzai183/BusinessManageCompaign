import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// styles
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// component
import {
  HomeBoxComponent, AnalyticComponent,
  ThirdHomeScreenComponent, FourthHomeComponent
} from '../../components/index';

const { width, height } = Dimensions.get('window');

const HomeScreeen = () => {
  const [showMetrics, setShowMetrics] = useState(false);
  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
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
        <MaterialIcons name={showMetrics ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={30} color={colors.text} />
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

const styles = StyleSheet.create({

  analyticsWrapper: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%'
  },

  scrollView: {
    paddingTop: '3%',
  },

  text: {
    fontSize: 18,
    color: colors.text,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '7%',
    paddingRight: '2%',
  },

  innerWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.linear1,
    borderRadius: 10,
    width: width / 2.5,
    height: height / 3.5,
    marginLeft: width / 30,
    marginBottom: width / 20,
    paddingVertical: height / 60,

    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
})