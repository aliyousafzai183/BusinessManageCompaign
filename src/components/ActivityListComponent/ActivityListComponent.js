import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';

const ActivityComponent = ({ price, date, paid, type }) => {
  const navigation = useNavigation();

  const handlePress = () => {
      navigation.navigate(RouteName.ADD_REPORT_SCREEN);
  }

  const iconColor = paid ? colors.green : colors.red;
  const iconType = type === 'Income' ? 'arrow-down' : 'arrow-up';
  
  return (
    <TouchableOpacity onPress={handlePress} style={{width: '100%', }}>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={[styles.iconContainer, { backgroundColor: paid? colors.success : colors.failure }]}>
          <Icon name={iconType} size={24} color={colors.background} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{price}</Text>
          <Text style={styles.description}>{type}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.description}>{date}</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: paid ? colors.label : colors.failure }]} disabled={paid}>
            <Text style={styles.buttonText}>{paid ? 'Paid' : 'Mark as Paid'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActivityComponent;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3%',
    paddingHorizontal: '6%',
    borderRadius: 20,
    backgroundColor: colors.linear1,
    marginVertical:'2%',

    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 4,
    flex:1,
  },
  iconContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.text,
    fontFamily: 'Roboto'
  },
  
  description: {
    fontSize: 14,
    color: colors.label,
    marginBottom: 4,
  },
  date: {
    fontSize: 8,
    color: colors.label,
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection:'column',
    alignItems:'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
