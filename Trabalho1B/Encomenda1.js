import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Encomenda1(){

    function mostra(){
        alert ('Encomenda 1:  Saindo para entrega.');
    }

    return(
        <View style={styles.card}>
            <TouchableOpacity style={styles.botao} onPress={mostra}>
                <Text style={styles.text}>Encomenda 1</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e0ccff',
        padding: 20,
        marginTop: 150,
        borderRadius: 3,
        marginVertical: 7,
    },
    text: {
        fontSize: 30,
    }
})