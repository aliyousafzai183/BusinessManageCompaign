import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      marginTop: 50,
      marginHorizontal: 20,
      backgroundColor: colors.plusButton,
      paddingVertical: '3%',
      width: '50%',
      alignItems: 'center',
      borderRadius: 30,
      marginBottom:'30%'
    },
    headerButton: {
      color: colors.background,
      fontWeight: 'bold',
      fontSize: 16,
    },
    contentContainer: {
      flex: 1,
      marginTop: 30,
    },
    avatarContainer: {
      alignItems: 'center',
      marginBottom: 30,
    },
    inputContainer: {
      marginTop: 10,
      alignItems: 'center'
    },
    textInput: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      padding: 10,
      marginBottom: '5%',
      width: '70%',
      textAlign: 'center'
    },
  
    label: {
      color: colors.primary,
      fontSize: 15
    }
  });

export default styles;