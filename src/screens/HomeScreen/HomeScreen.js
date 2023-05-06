import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// styles
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

// icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// component
import { HomeBoxComponent, AnalyticComponent } from '../../components/index';

const HomeScreeen = () => {
  const [showMetrics, setShowMetrics] = useState(true);
  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
      <ScrollView style={styles.scrollView}>
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
        {/* <TouchableOpacity
          onPress={() => setShowMetrics(!showMetrics)}
          style={styles.button}
        > */}
        {/* <Text style={styles.text}>See Your Business Metrics</Text> */}
        {/* <MaterialIcons name={showMetrics ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={30} color={colors.text} />
        </TouchableOpacity> */}

        <Text style={styles.button}>See Your Business Metrics</Text>

        {
          showMetrics ?
            <View style={styles.analyticsWrapper}>
              <AnalyticComponent
                icon="chart-line"
                title="Retention"
                value={22}
                color="#2196F3"
              />
              <AnalyticComponent
                icon="box-open"
                title="Inventory"
                value={22}
                color="#4CAF50"
              />
              <AnalyticComponent
                icon="dollar-sign"
                title="ARPU"
                value={22}
                color="#FF9800"
              />
              <AnalyticComponent
                icon="users"
                title="CAC"
                value={22}
                color="#E91E63"
              />
              <AnalyticComponent
                icon="chart-bar"
                title="Revenue"
                value={22}
                color="#9C27B0"
              />
            </View>
            :
            <></>
        }

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
    fontSize:18
  }
})