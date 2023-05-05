import { StyleSheet } from "react-native";
import colors from '../../utils/colors';

const UniversalContainerStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1
    },

    innerContainer: {
        backgroundColor: colors.background,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    }
})

export default UniversalContainerStyle;