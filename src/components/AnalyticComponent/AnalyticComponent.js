import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import Fontisto from 'react-native-vector-icons/FontAwesome5';

// styles
import colors from '../../utils/colors';

const { width } = Dimensions.get('window');


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

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.linear1,
    borderRadius:10,
    paddingVertical:'2%',
    width:width/4,
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
    marginVertical:'2%',
    alignSelf:'center',

  },
  
  value:{
    fontSize:15,
    fontWeight:'bold',
    color:colors.text,
    marginVertical:'2%',
    alignSelf:'center'
  }
})
