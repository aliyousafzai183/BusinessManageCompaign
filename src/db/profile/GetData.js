import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

const GetData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('profileData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    ToastAndroid.show(error.message, ToastAndroid.SHORT);
  }
};

export default GetData;
