import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Encomenda2(){

    function mostra(){
        alert ('Encomenda 1:  Preso na alfandega.');
    }

    return(
        <View style={styles.card}>
            <TouchableOpacity style={styles.botao} onPress={mostra}>
                <Text style={styles.text}>Encomenda 2</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e0ccff',
        padding: 20,
        borderRadius: 3,
        marginVertical: 7,
    },
    text: {
        fontSize: 30,
    }
})