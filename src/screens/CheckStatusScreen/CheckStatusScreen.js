import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, BackHandler, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import GetData from '../../db/data/GetData';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckStatusScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [good, setGood] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {

      GetData().then(reports => {
        setData(reports);
      }).catch(error => {
        console.log(error);
      });
    }, [])
  );

  // calculations
  useEffect(() => {
    const totalRevenue = data.reduce((acc, item) => {
      if (item.incomeReport) {
        return acc + item.totalIncome;
      } else {
        return acc;
      }
    }, 0);


    const totalExpense = data.reduce((acc, item) => {
      if (!item.incomeReport) {
        return acc + item.totalIncome;
      } else {
        return acc;
      }
    }, 0);

    if (totalRevenue > totalExpense) {
      setGood(true);
    } else {
      setGood(false);
    }

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.plusButton} />
        </View>
      ) : data.length === 0 ? (
        <View style={styles.iconContainer}>
          <Icon name="alert-circle-outline" size={100} color={colors.plusButton} />
          <Text style={[styles.heading, { color: colors.plusButton }]}>No Data Found!</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>There is no data available to show. Please add some data first.</Text>
          </View>
        </View>
      ) : good ? (
        <View style={styles.iconContainer}>
          <Icon name="check-circle-outline" size={100} color={colors.success} />
          <Text style={[styles.heading, { color: colors.success }]}>Good Business Analytics!</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Wow! your business is running good. Keep it up and follow our tips and quotes to improve your business more and more.</Text>
          </View>
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <Icon name="close-circle-outline" size={100} color={colors.failure} />
          <Text style={[styles.heading, { color: colors.failure }]}>Bad Business Analytics!</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Oops! your business analytics are not good. It's time to worry. Follow best practices and our tips and quotes to improve your business.</Text>
          </View>
        </View>
      )}
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconContainer: {
    alignItems: 'center',
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: '2%'
  },

  description: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  descriptionContainer: {
    width: '50%',
  }
});

export default CheckStatusScreen;