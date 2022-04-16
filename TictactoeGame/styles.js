import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50
    },
    headerText: {
        fontSize: 20,
        marginBottom: 20
    },
    lineBoxes: {
        flexDirection: 'row',
        margin: 2
    },
    box: {
        height: 70,
        width: 70,
        borderWidth: 2,
        backgroundColor: 'red',
        margin: 2,
        justifyContent: 'center'
    },
    boxText: {
        fontSize: 30,
        textAlign: 'center'
    },
    newGame: {
        marginTop: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5
    },
})

export default styles