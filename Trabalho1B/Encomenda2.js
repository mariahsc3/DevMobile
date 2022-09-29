import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default function Encomenda2(){

    function mostra(){
        alert ('Encomenda 2:  Preso na alfandega.');
    }

    return(
        <View style={styles.card}>
            <TouchableOpacity style={styles.botao} onPress={mostra}>
                <Feather name='package' size={24} color='#000'/>
                <Text style={styles.text}>Encomenda 2</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e0ccff',
        padding: 20,
        marginVertical: 7,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 30,
    }
})