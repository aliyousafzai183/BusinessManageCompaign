import { StyleSheet } from "react-native";
import colors from '../../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      backgroundColor: colors.linear2,
      padding: 20,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      color: colors.primary,
      textAlign: 'center',
      marginBottom: 10,
    },
    message: {
      fontSize: 16,
      color: colors.text,
      textAlign: 'center',
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%',
    },
    button: {
      paddingHorizontal: 20,
    },
    buttonText: {
      fontSize: 16,
      color: colors.text,
      textAlign: 'center',
    },
    buttonYesText: {
      color: colors.primary,
    },
  });

export default styles;