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
  const [itemName, setItemName] = useState('');
  const [totalIncome, setTotalIncome] = useState();
  const [description, setDescription] = useState('');
  const [received, setReceived] = useState();
  const [ordersReceived, setOrdersReceived] = useState();
  const [repeatOrders, setRepeatOrders] = useState();
  const [costOfSale, setCostOfSale] = useState();
  const [currency, setCurrency] = useState('');

  const fetchData = async () => {
    const data = await GetProfileData();
    if (data != null) {
      setCurrency(data.currency);
    }
  };

  useEffect(() => {
    fetchData();
    const fetchReport = async () => {
      try {
        const report = await getReportById(id);
        setItemName(report.vendorName);
        setTotalIncome(report.totalIncome.toString());
        setDescription(report.description);
        setReceived(report.paid);
        setDate(report.date);
        setRepeatOrders(report.previousCustomer);
        setOrdersReceived(report.ordersReceived);
        setCostOfSale(report.costOfSale);
      } catch (error) {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      }
    };
    fetchReport();
  }, [id]);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Report</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Vendor Name:</Text>
          <Text style={styles.value}>{itemName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{date}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Received Orders:</Text>
          <Text style={styles.value}>{ordersReceived}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Repeated Customer:</Text>
          <Text style={styles.value}>{repeatOrders}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Cost of Sale:</Text>
          <Text style={styles.value}>{costOfSale} {currency}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Total Income:</Text>
          <Text style={styles.value}>{totalIncome} {currency}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{description}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>{received ? 'Paid' : 'Pending'}</Text>
        </View>

      </ScrollView>
    </LinearGradient>
  )
}

export default ExpenseDetailScreen;