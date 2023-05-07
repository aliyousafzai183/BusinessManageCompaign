import { StyleSheet } from "react-native";
import colors from '../../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    main: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.label,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    radio: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: colors.label,
    }
})

export default styles;