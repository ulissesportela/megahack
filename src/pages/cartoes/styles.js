import { StyleSheet } from 'react-native'
//import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        //paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        lineHeight:24,
        color: '#737380'
    },
    cartaoList: {
        marginTop: 32,
    },
    cartao: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom:16,
    },
    cartaoProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    cartaoValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#83DEA3',
        fontSize: 15,
        fontWeight: 'bold'
    }
})