import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, BackHandler, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import GetData from '../../db/data/GetData';
import { useFocusEffect } from '@react-navigation/native';
import GetProfileData from '../../db/profile/GetProfileData';

const ExpenseReport = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState('');

  const [metrics, setMetrics] = useState({
    totalExpense: 0,
    costOfSale: 0,
    totalPayable: 0,
    payroll: 0,
    others: 0,
  });



  useFocusEffect(
    React.useCallback(() => {

      GetData().then(reports => {
        setData(reports);
      }).catch(error => {
        console.log(error);
      });

      const fetchData = async () => {
        const data = await GetProfileData();
        if (data != null) {
          setCurrency(data.currency);
        }
      };

      fetchData();
    }, [])
  );

  // calculations
  useEffect(() => {

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

    const totalPayable = data.reduce((acc, item) => {
      if (!item.incomeReport && !item.paid) {
        return acc + item.totalIncome;
      } else {
        return acc;
      }
    }, 0);

    const payroll = totalExpense;

    const others = costOfSale;

    setMetrics({
      totalExpense,
      costOfSale,
      totalPayable,
      payroll,
      others
    });
  }, [data]);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      if (backHandler) {
        backHandler.remove();
      }
    };
  }, []);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      <ScrollView style={styles.invoice}>
        <Text style={styles.invoiceTitle}>REPORT</Text>
        <View style={styles.borderTop}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Expense:</Text>
          <Text style={styles.value}>{metrics.totalExpense} {currency}</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Cost of Sales:</Text>
          <Text style={styles.value}>{metrics.costOfSale} {currency}</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Payroll:</Text>
          <Text style={styles.value}>{metrics.totalExpense} {currency}</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Payable:</Text>
          <Text style={styles.value}>{metrics.totalPayable} {currency}</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Operating Expenses:</Text>
          <Text style={styles.value}>{metrics.payroll + metrics.costOfSale} {currency}</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={{marginBottom:'15%'}}></View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  invoice: {
    margin: 20,
    backgroundColor: colors.linear1,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.plusButton,
    textAlign: 'center',
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: colors.linear2,
    marginTop: 10,
    marginBottom: 20,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.linear2,
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    color: colors.plusButton,
    fontWeight: 'bold',
  },
});

export default ExpenseReport;