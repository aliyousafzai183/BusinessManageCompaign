import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');


const styles = {
    container: {
      marginHorizontal: '5%',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.plusButton,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      height: 50,
      fontSize: 18,
      color: colors.text,
    },
    textArea: {
      flex: 1,
      paddingHorizontal: 10,
      paddingTop: 10,
      fontSize: 18,
      color: colors.text,
      height: 200,
      textAlignVertical: 'top',
    },
    buttonContainer: {
      marginTop: '15%',
      backgroundColor: colors.plusButton,
      paddingVertical: '3%',
      width: '50%',
      alignItems: 'center',
      borderRadius: 30,
      alignSelf:'center',
      flexDirection:'row',
      paddingHorizontal:'5%',
      justifyContent:'space-between'
    },
    buttonText: {
      color: colors.background,
      fontSize: 18,
      marginLeft: '5%',
    },
  
    warningText: {
      fontSize: 14,
      color: colors.failure,
      marginTop: '2%',
    },
  
    heading:{
      fontSize:15,
      fontWeight:'bold',
      marginBottom:'5%',
      alignSelf:'center',
      color:colors.text
    }
  
  };

export default styles;