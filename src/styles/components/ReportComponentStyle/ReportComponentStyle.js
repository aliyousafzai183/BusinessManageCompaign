import { StyleSheet } from "react-native";
import colors from '../../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginHorizontal: 16,
      marginVertical: 8,
      backgroundColor: colors.linear1,
      borderRadius: 20,
  
      shadowColor: colors.text,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05, // Change the shadowOpacity to 0.05 for a lighter shadow
      shadowRadius: 2, // Change the shadowRadius to 2 for a softer shadow
      elevation: 4,
    },
  
    iconContainer: {
      // backgroundColor: colors.plusButton,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      height: 48,
      width: 48,
      marginRight: 16,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
      color: colors.text,
    },
    description: {
      fontSize: 14,
      color: colors.label,
    },
    arrowContainer: {
      marginLeft: 16,
    },
  });

export default styles;