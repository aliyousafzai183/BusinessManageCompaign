import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {QuoteScreenStyles as styles} from '../../styles/index';
import colors from '../../utils/colors';

const QuoteScreen = () => {
  const [quote, setQuote] = useState('');
  const [internet, setInternet] = useState(false);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setInternet(true);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
      setInternet(false);
    }
  };

  const handleGetQuote = () => {
    fetchQuote();
  };

  return (
    <LinearGradient
      colors={[colors.linear1, colors.linear2]}
      style={styles.container}
    >
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{
          internet
          ?
          quote
          :
          "No Internet! Try connecting to the internet to avail that service"
        }</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGetQuote}>
        <Text style={styles.buttonText}>{
          internet
          ?
          "Get a Quote"
          :
          "Retry"
        }</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default QuoteScreen;
