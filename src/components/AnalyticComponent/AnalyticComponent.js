import React from 'react';
import { View, Text, Dimensions} from 'react-native';
import Fontisto from 'react-native-vector-icons/FontAwesome5';

// styles
import {AnalyticalComponentStyle as styles} from '../../styles/components';

const HomeScreeen = ({icon, title, value, color}) => {

  const formatValue = (value) => {
      return value.toFixed(1);
  }

  return (
      <View style={styles.container}>
        <Fontisto name={icon} size={24} color={color} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{formatValue(value)}</Text>
      </View>
  )
}

export default HomeScreeen;