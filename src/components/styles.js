import React from "react";

import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DBDBDB',
        paddingTop: 40,

    },
    areaMoeda: {
        width: '90%',
        backgroundColor: '#ffff',
        paddingTop: 9,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    txtTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#121212',
        paddingLeft: 5,
    },
    areaValor: {
        marginTop: 5,
        paddingTop: 20,
        width: '90%',
        backgroundColor: '#ffff',
        

    },
    txtTitConverter: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#121212',
        paddingLeft: 5,
    },
    input: {

        height: 50,
        backgroundColor: "white",
        paddingLeft: 15,
        fontSize: 20,
    },
    botaoArea: {
        width: 150,
        height: 50,
        backgroundColor: '#FF3232',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 30

    },
    botaoText: {
        fontSize: 18,
        color: '#ffff',
        fontWeight: 'bold',
    },
    areaResultado: {
        width: '90%',
        height:'auto',
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 5
    },
    txtResultado: {
        fontSize: 40,
        color: '#FF3232',
        paddingBottom:15
    },
    txtResultado01: {
        fontSize: 40,
        color: 'green',
    },




});
export default styles;