import react from "react";
import { StyleSheet } from "react-native";

//Fiz o style em outro file pois achei que ficou menos poluído

const styles = StyleSheet.create ({
    //cores
    //#40e0d0
    //#4169e1
    //#48d1cc
    // bg #008080  3cb371  20b2aa

    container: {
        backgroundColor: '#20b2aa',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 100,
        marginTop: 40,
        height: 930
    
    },
    buttonContainer: {
        flex: 3,
        justifyContent: 'space-around'
    },
    inputContainer: {
        height: 160,
        justifyContent: 'flex-end',

    },
    
    input: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'right', 

    },

    row: {
        flexDirection: 'row'
    },

    //cor do btn
    button: {
        backgroundColor: '#afeeee',
        flex: 1,
        padding: 20,
        borderRadius: 38,
        margin: 12,
    },

    //cor do texto do btn
    buttonText: {
        fontSize: 28,
        textAlign: 'center',
        color: '#191970'
    },

    //cor do btn de igual
    calculateButton: {
        backgroundColor: '#40e0d0',
        borderRadius: 38,
        padding: 16,
        width: '100%'
    },
    operatorButton: {
        backgroundColor: '#48d1cc',
        flex: 1,
        padding: 20,
        borderRadius: 38,
        margin: 12,
    }
})

export default styles;