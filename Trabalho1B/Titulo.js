import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Titulo(){
    return(
        <View style={styles.title}>
            <Text style={styles.title}>Rastreador</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 50,
        marginBottom: 5,
    }
})