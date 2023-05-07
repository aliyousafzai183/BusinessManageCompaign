import { StyleSheet } from "react-native";
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '5%',
        paddingHorizontal: '5%',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.plusButton,
        borderRadius: 30,
        paddingHorizontal: '5%',
        flex: 1,
        marginRight: '5%',
    },
    searchIcon: {
        marginHorizontal: '3%',
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: colors.black,
        borderRadius: 10,
        color: colors.background,
    },
    filterButton: {
        width: 45,
        height: 45,
        borderRadius: 45,
        backgroundColor: colors.plusButton,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: colors.linear1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '33%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalButton: {
        backgroundColor: colors.linear2,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    modalButtonText: {
        color: colors.text,
        fontSize: 16,
    },

    modalCloseButton: {
        backgroundColor: colors.failure,
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 20,
    },
    modalCloseButtonText: {
        color: colors.background,
        fontWeight: 'bold',
        textAlign: 'center',
    }

});

export default styles;