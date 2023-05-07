import React from 'react';
import { View, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/FontAwesome5';
import {ThirdHomeScreenComponentStyle as styles} from '../../styles/components';

const ThirdHomeScreenComponent = ({icon, title, price, color}) => {

  const formatPrice = (price) => {
    if(price >= 1000000){
      return (price/1000000).toFixed(1) + 'M';
    } else if(price >= 1000){
      return (price/1000).toFixed(1) + 'K';
    } else {
      return price.toFixed(1);
    }
  }

  return (
      <View style={styles.container}>
        <Fontisto name={icon} size={24} color={color} />
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.price, {color:color}]}>{formatPrice(price)}</Text>
      </View>
  )
}

export default ThirdHomeScreenComponent;
