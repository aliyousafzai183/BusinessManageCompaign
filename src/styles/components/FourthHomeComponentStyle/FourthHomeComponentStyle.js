import { StyleSheet } from "react-native";
import colors from '../../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    title: {
      fontSize: 10,
      color: colors.text,
      marginVertical: '2%'
    },
  
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
      marginVertical: '2%'
    },
  
    rollContainer: {
      borderWidth: 10,
      borderColor: '#FFD700',
      borderRadius: 100,
      paddingHorizontal: '12%',
      paddingVertical: '12%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:'10%'
    },
  
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:width/3
    },
  
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
  
    box: {
      width: '15%',
      height: '60%',
      marginRight: '10%'
    }
  })

export default styles;