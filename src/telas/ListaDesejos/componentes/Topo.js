import React from 'react';
import { StyleSheet, View } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Topo() {
  return (
    <View style={styles.topo}>
      <Texto style={styles.titulo}>Sua Lista de Desejos</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
