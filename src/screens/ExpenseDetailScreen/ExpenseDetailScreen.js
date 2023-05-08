import React, { useState, useEffect } from 'react';
import { View, Text, ToastAndroid, ScrollView } from 'react-native';
import colors from '../../utils/colors';
import { ExpenseDetailScreenStyle as styles } from '../../styles/index';
import getReportById from '../../db/data/GetSpecificData';
import LinearGradient from 'react-native-linear-gradient';
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import GetProfileData from '../../db/profile/GetProfileData';

const ExpenseDetailScreen = ({ route }) => {
  const id = route.params?.id;

  const [date, setDate] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [totalExpense, setTotalExpense] = useState();
  const [reason, setReason] = useState('');
  const [paid, setPaid] = useState();
  const [currency, setCurrency] = useState('');

  const fetchData = async () => {
    const data = await GetProfileData();
    if (data != null) {
      setCurrency(data.currency);
    }
  };

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const report = await getReportById(id);
        setVendorName(report.vendorName);
        setTotalExpense(report.totalIncome.toString());
        setReason(report.description);
        setPaid(report.paid);
        setDate(report.date);
      } catch (error) {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      }
    };
    fetchReport();
    fetchData();
  }, [id]);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Report</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Vendor Name:</Text>
          <Text style={styles.value}>{vendorName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{date}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Total Expense:</Text>
          <Text style={styles.value}>{totalExpense} {currency}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Reason:</Text>
          <Text style={styles.value}>{reason}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>{paid ? 'Paid' : 'Pending'}</Text>
        </View>

      </ScrollView>
    </LinearGradient>
  )
}

export default ExpenseDetailScreen;