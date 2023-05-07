import { StyleSheet } from "react-native";
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  logo: {
    height: '35%',
    width: '35%',
  },

  textContainer: {
    textAlign: 'center',
  },

  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold'
  },
})


export default styles;