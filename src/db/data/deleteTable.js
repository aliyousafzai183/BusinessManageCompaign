import db from './db';
import { ToastAndroid } from 'react-native';

const deleteTable = () => {
  try {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE IF EXISTS reports', [], (tx, result) => {
        ToastAndroid.show('Data Cleared!', ToastAndroid.LONG);
      }, (error) => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
    });
  } catch (error) {
    ToastAndroid.show(error.message, ToastAndroid.LONG);
  }
};

export default deleteTable;
