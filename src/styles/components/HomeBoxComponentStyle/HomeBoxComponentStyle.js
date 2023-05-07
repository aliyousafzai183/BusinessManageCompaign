import { StyleSheet } from "react-native";
import colors from '../../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


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

export default styles;