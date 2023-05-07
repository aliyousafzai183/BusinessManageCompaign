import db from './db';
import { ToastAndroid } from 'react-native';

// Insert data into reports table
const InsertData = (data) => {
  console.log('InsertData called with data:', data);

  try {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO reports (incomeReport, vendorName, description, paid, date, ordersReceived, itemName, previousCustomer, totalIncome, costOfSale) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          data.incomeReport,
          data.vendorName,
          data.totalExpense,
          data.description,
          data.paid,
          data.date,
          data.ordersReceived,
          data.itemName,
          data.previousCustomer,
          data.totalIncome,
          data.costOfSale,
        ]
      ).then((trx) => {
        ToastAndroid.show("Added Report", ToastAndroid.LONG);
      }).catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
    });
  } catch (error) {
    ToastAndroid.show(error.message, ToastAndroid.LONG);
  }
};

export default InsertData;