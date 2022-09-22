import React from "react";
import { View, Text, StyleSheet} from 'react-native';

export default function MeuComponente(){
    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}>React Native</Text>
            <Text style={styles.cardSubtitle}>Criando aplicações para Android</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 3,
      marginVertical: 7,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardSubtitle:{
      color: '#999',
      fontSize: 14,
    }
  });
  