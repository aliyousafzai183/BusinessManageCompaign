import { StyleSheet } from "react-native";
import colors from '../../../utils/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '3%',
        paddingHorizontal: '6%',
        borderRadius: 20,
        backgroundColor: colors.linear1,
        marginVertical: '2%',

        shadowColor: colors.text,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        flex: 1,
    },
    iconContainer: {
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
        fontFamily: 'Roboto'
    },

    description: {
        fontSize: 14,
        color: colors.label,
        marginBottom: 4,
    },
    date: {
        fontSize: 8,
        color: colors.label,
    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    buttonText: {
        color: colors.background,
        fontWeight: 'bold',
        fontSize: 12,
    },
});


export default styles;