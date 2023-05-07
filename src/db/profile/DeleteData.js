import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeleteData = async () => {
  try {
    await AsyncStorage.removeItem('profileData');
    ToastAndroid.show('Data deleted successfully', ToastAndroid.SHORT);
  } catch (e) {
    ToastAndroid.show(e, ToastAndroid.SHORT);
  }
};

export default DeleteData;