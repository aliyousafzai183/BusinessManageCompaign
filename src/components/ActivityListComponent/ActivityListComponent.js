import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';
import {ActivityListComponentStyle as styles} from '../../styles/components';
import GetProfileData from '../../db/profile/GetProfileData';
import db from '../../db/data/db';

const ActivityComponent = ({id, price, date, paid, type }) => {
  const [currency, setCurrency] = useState('');
  const [markPaid, setMarkPaid] = useState(paid);
  const navigation = useNavigation();

  const handlePress = () => {
      if(type === 'Income'){
        navigation.navigate(RouteName.INCOME_DETAIL_SCREEN, {id : id});
      }else{
        navigation.navigate(RouteName.EXPENSE_DETAL_SCREEN, {id : id});

      }
  }

  const handleUpdate = () => {
    const updatedPaid = !markPaid; // use the opposite value of markPaid
    setMarkPaid(updatedPaid);
    try {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE reports SET paid = ? WHERE id = ?',
          [updatedPaid, id], // use the updatedPaid variable here
          () => {
            ToastAndroid.show("Paid!", ToastAndroid.SHORT);
          },
          error => ToastAndroid.show("Error Updating Report", ToastAndroid.LONG)
        );
      });
    } catch (error) {
      console.log('Error: ', error);
    }
    fetchData();
  }
  

  const fetchData = async () => {
    const data = await GetProfileData();
    if (data != null) {
      setCurrency(data.currency);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  const iconType = type === 'Income' ? 'arrow-down' : 'arrow-up';
  
  return (
    <TouchableOpacity onPress={handlePress} style={{width: '100%', }}>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={[styles.iconContainer, type === 'Income' && { backgroundColor: colors.success }]}>
          <Icon name={iconType} size={24} color={colors.background} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{price} {currency}</Text>
          <Text style={styles.description}>{type}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.description}>{date}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: markPaid ? colors.label : colors.failure }]}
            disabled={markPaid}
            onPress={handleUpdate}
          >
            <Text style={styles.buttonText}>{markPaid ? 'Paid' : 'Mark as Paid'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActivityComponent;