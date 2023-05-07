import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:'3%'
    },
  });

export default styles;