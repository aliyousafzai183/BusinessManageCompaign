import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/FontAwesome5';

// styles
import colors from '../../utils/colors';


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

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
  },

  title:{
    fontSize:14,
    color:colors.text,
    marginVertical:'2%'
  },
  
  price:{
    fontSize:16,
    fontWeight:'bold',
    marginVertical:'2%'
  }
})
