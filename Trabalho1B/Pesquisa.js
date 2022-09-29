import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default function Pesquisa(){
    return(
        <View style={styles.card}>
            
            <TextInput style={styles.campo}>
            <Feather name='search' size={24} color='#000'/>  Encomenda</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    campo: {
        backgroundColor: '#e0ccff',
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginTop: 20,
        marginHorizontal: 50,
        borderRadius: 20,
    }
})