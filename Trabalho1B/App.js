import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import Titulo from './Titulo';
import Pesquisa from './Pesquisa';
import Botao from './Botao';
import Encomenda1 from './Encomenda1';
import Encomenda2 from './Encomenda2';
import Encomenda3 from './Encomenda3';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Titulo/>
      <Text style={styles.text}>Veja onde estão suas encomendas!</Text>
      <Pesquisa/>
      <Botao/>
      <Encomenda1/>
      <Encomenda2/>
      <Encomenda3/>
      <Text style={styles.footer}>©Mariah S. Chamlet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8600e6',
    paddingTop: 130,
    paddingBottom: 10,
  },
  text: {
    marginHorizontal: 80,
    color: '#fff',
    fontSize: 20,
  },
  footer: {
    color: '#e0ccff',
    fontSize: 20,
    marginTop: 200,
    marginHorizontal: 130,

  }
});
