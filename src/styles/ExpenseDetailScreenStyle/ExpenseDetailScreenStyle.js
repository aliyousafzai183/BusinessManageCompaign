import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.plusButton,
    marginBottom: 20,
    textAlign: 'center',
    paddingBottom:'2%',
    borderBottomWidth: 1,
    borderBottomColor: colors.plusButton,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.plusButton,
    paddingBottom: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.plusButton,
    marginRight: 10,
  },
  value: {
    fontSize: 16,
    color: colors.text,
  },
});

export default styles;
