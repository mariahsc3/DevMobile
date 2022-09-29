import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Botao(){
    return(
        <View style={styles.card}>
            <TouchableOpacity style={styles.botao}>
                    <Text style={styles.text}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#e0ccff',
        marginTop: 10,
        paddingHorizontal: 50,
        paddingVertical: 5,
        borderRadius: 50,
    },
    text: {
        fontSize: 25,
    },
})