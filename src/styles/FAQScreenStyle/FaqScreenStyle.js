import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');


const styles = {
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.plusButton,
      marginBottom: 20,
    },
    questionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: colors.plusButton,
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginTop: 20,
      backgroundColor: colors.linear1,
      borderRadius: 20
    },
    questionText: {
      flex: 1,
      fontSize: 18,
      color: colors.text,
    },
    answerText: {
      fontSize: 16,
      color: colors.text,
      backgroundColor: colors.linear1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      padding: '5%'
    },
  };
  
export default styles;