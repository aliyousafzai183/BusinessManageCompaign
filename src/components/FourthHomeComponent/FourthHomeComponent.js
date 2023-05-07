import React from 'react';
import { View, Text} from 'react-native';
import {FourthHomeComponentStyle as styles} from '../../styles/components';

const FourthHomeComponent = ({ price, others }) => {

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return (price / 1000000).toFixed(1) + 'M';
    } else if (price >= 1000) {
      return (price / 1000).toFixed(1) + 'K';
    } else {
      return price.toFixed(1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.rollContainer}>
        <Text style={styles.price}>{formatPrice(price)}</Text>
        <Text style={styles.title}>Total</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <View style={[styles.box, {
            backgroundColor: '#FFD700',
          }]}></View>
          <Text style={styles.title}>Payroll</Text>
        </View>
        <Text style={styles.title}>{formatPrice(price)}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <View style={[styles.box, {
            backgroundColor: '#FF5733',
          }]}></View>
          <Text style={styles.title}>Others</Text>
        </View>
        <Text style={styles.title}>{formatPrice(others)}</Text>
      </View>

    </View>
  )
}

export default FourthHomeComponent;
