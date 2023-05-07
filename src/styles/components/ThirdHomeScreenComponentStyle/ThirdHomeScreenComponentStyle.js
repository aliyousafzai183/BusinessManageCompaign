import { StyleSheet } from "react-native";
import colors from '../../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


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

export default styles;