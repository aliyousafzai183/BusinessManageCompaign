import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    quoteContainer: {
      backgroundColor: colors.linear1,
      padding: 20,
      borderRadius: 10,
    },
    quoteText: {
      fontSize: 20,
      fontStyle: 'italic',
      textAlign: 'center',
      color: colors.text
    },
    button: {
      marginTop: 20,
      backgroundColor: colors.plusButton,
      padding: 10,
      borderRadius: 10,
      width:'30%',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.background,
      alignSelf:'center'
    },
  });

export default styles;