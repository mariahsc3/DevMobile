import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MeuComponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Primeiro Projeto!</Text>
      <ScrollView>
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d198e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 24,
  },
});
