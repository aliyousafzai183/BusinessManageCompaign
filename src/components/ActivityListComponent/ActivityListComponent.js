import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';

const ActivityComponent = ({ price, date, paid, type, route }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(route);
  }

  const iconColor = paid ? colors.green : colors.red;
  const iconType = type === 'Income' ? 'arrow-down' : 'arrow-up';
  
  return (
    <TouchableOpacity onPress={handlePress} style={{height: 100, width: '100%', }}>
      <View style={styles.itemContainer}>
        <View style={[styles.iconContainer, { backgroundColor: paid? colors.success : colors.failure }]}>
          <Icon name={iconType} size={24} color={colors.background} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{price}</Text>
          <Text style={styles.description}>{type}</Text>
          {/* <Text style={styles.date}>{date}</Text> */}
        </View>
        <View style={styles.buttonContainer}>
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
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: colors.linear1,
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
    fontSize: 12,
    color: colors.label,
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
