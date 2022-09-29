import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default function Encomenda1(){

    function mostra(){
        alert ('Encomenda 1:  Saindo para entrega.');
    }

    return(
        <View style={styles.card}>
            <TouchableOpacity style={styles.botao} onPress={mostra}>
                <Feather name='package' size={24} color='#000'/>
                <Text style={styles.text}>Encomenda 1</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e0ccff',
        padding: 20,
        marginTop: 70,
        marginBottom: 7,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 30,
    }
})