import { StyleSheet } from "react-native";
import colors from '../../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    mainContainer: {
      height: 90,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      borderBottomWidth:1,
      borderColor:colors.text
    },
  
    secondContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop: 16,
    },
  
    title: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
    },
  
    button: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default styles;