import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';
import {ActivityListComponentStyle as styles} from '../../styles/components';

const ActivityComponent = ({ price, date, paid, type }) => {
  const navigation = useNavigation();

  const handlePress = () => {
      navigation.navigate(RouteName.ADD_REPORT_SCREEN);
  }

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