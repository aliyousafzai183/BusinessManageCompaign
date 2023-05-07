import { StyleSheet } from "react-native";
import colors from '../../utils/colors';



const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:20,
      justifyContent:'center',
      alignItems:'center'
    },
  
    logo: {
      height: '35%',
      width: '35%',
    },
  
    text: {
      color: colors.white,
      fontSize: 16,
      marginTop: 10
    }
  });
  

export default styles;