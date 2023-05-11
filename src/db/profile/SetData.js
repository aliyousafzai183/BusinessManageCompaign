import {ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SetData = async (businessName, founderName, phoneNumber, email, currency) => {
    try {
      const profileData = {
        businessName: businessName,
        currency: currency,
      };
      const jsonValue = JSON.stringify(profileData);
      await AsyncStorage.setItem('profileData', jsonValue);
      ToastAndroid.show('Profile saved successfully', ToastAndroid.SHORT);
    } catch (e) {
      ToastAndroid.show(e, ToastAndroid.SHORT);
    }
  };
  
  export default SetData;