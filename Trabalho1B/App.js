import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import Titulo from './Titulo';
import Encomenda1 from './Encomenda1';
import Encomenda2 from './Encomenda2';
import Encomenda3 from './Encomenda3';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Titulo/>
      <Text style={styles.text}>Veja onde estão suas encomendas!</Text>
      <Encomenda1/>
      <Encomenda2/>
      <Encomenda3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8600e6',
    alignItems: 'center',
    paddingTop: 150,
    paddingBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});
