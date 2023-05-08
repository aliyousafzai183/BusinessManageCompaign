import React from 'react';
import { View, Text, Dimensions} from 'react-native';
import Fontisto from 'react-native-vector-icons/FontAwesome5';

// styles
import {AnalyticalComponentStyle as styles} from '../../styles/components';

const HomeScreeen = ({icon, title, value, color}) => {
  const formatPrice = (price) => {
    if (!price) {
      return '--';
    } else if (title.includes('RDP') || title.includes('UNP')) {
      return price.toFixed(1) + '%';
    } else if (price >= 1000000) {
      return parseFloat((price / 1000000).toFixed(1)) + 'M';
    } else if (price >= 1000) {
      return parseFloat((price / 1000).toFixed(1)) + 'K';
    } else {
      return price.toFixed(1);
    }
  }

  return (
      <View style={styles.container}>
        <Fontisto name={icon} size={24} color={color} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{formatPrice(value)}</Text>
      </View>
  )
}

export default HomeScreeen;
