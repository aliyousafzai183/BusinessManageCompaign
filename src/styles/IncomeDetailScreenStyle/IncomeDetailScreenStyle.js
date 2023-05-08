import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    datePickerButton: {
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      width: '40%',
      alignSelf: 'center',
      backgroundColor: colors.plusButton,
      marginBottom: '5%'
    },
    textInput: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      padding: 10,
      marginBottom: '5%',
      color:colors.text
    },
    textInputCost: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      padding: 10,
    },
    button: {
      backgroundColor: colors.linear1,
      borderRadius: 10,
      padding: 10,
      marginBottom: '50%'
    },
    datePickerText: {
      textAlign: 'center',
      color: colors.background
    },
    buttonText: {
      textAlign: 'center',
      color: colors.label,
      fontSize: 20,
      fontWeight:'bold'
    },
    costOfSaleContainer: {
      flexDirection: 'column',
      marginBottom: '3%'
    },
  
    radioText: {
      marginRight: 10,
      marginLeft: 5,
      color: colors.label
    },
  
    inputButtonLabel: {
      color: colors.text,
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: '5%'
    },
  
    radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '10%',
      marginBottom: '40%'
    },
  
    label: {
      color: colors.plusButton,
      fontSize: 15
    }
  });

export default styles;