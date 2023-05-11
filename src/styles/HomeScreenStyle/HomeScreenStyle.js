import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({

  analyticsWrapper: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%'
  },

  scrollView: {
    paddingTop: '3%',
  },

  text: {
    fontSize: 18,
    color: colors.plusButton,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '7%',
    paddingRight: '2%',
  },

  innerWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.linear1,
    borderRadius: 40,
    width: width / 2.5,
    height: height / 3.5,
    marginLeft: width / 30,
    marginBottom: width / 20,
    paddingVertical: height / 60,

    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  profileButtonContainer: {
    paddingHorizontal: '7%',
    flexDirection: 'row',
    marginBottom: '5%'
  },

  profileText: {
    fontSize: 15,
    color: colors.text
  },

  buttonText: {
    fontSize: 15,
    color: colors.failure,
    marginLeft: '3%'
  },

  sliderContainer: {
    height: '22%',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor:colors.linear1
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteIcon: {
    marginBottom: 10,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.plusButton,
    textAlign: 'right',
  },
})
export default styles;