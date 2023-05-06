import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import Fontisto from 'react-native-vector-icons/FontAwesome5';

// styles
import colors from '../../utils/colors';

const { width } = Dimensions.get('window');


const HomeScreeen = ({icon, title, price, color}) => {

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
        <Text style={styles.price}>{formatPrice(price)}</Text>
      </View>
  )
}

export default HomeScreeen;

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.linear1,
    borderRadius:10,
    paddingVertical:'4%',
    paddingHorizontal:'8%',
    width:width/2.5,
    marginLeft:width/30,
    marginBottom:width/20,

    shadowColor:colors.text,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  title:{
    fontSize:14,
    color:colors.text,
    marginVertical:'2%'
  },
  
  price:{
    fontSize:16,
    fontWeight:'bold',
    color:colors.text,
    marginVertical:'2%'
  }
})
