import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    sliderButtonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sliderButtonLabel: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.primary,
    },
    activeSliderButtonContainer: {
      backgroundColor: colors.plusButton,
      padding: 10,
      borderWidth: 1,
      borderColor: colors.plusButton,
    },
    inActiveSliderButtonContainer: {
      backgroundColor: colors.linear1,
      padding: 10,
      borderWidth: 1,
      borderColor: colors.plusButton,
    },
    activeSliderButtonLabel: {
      color: colors.background,
    },
    inActiveSliderButtonLabel: {
      color: colors.label,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginBottom: '5%'
    },
  
    secondButton: {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10
    },
  
    firstButton: {
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10
    },
  });

export default styles;