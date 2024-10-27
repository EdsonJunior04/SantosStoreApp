import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Item({ item }) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} resizeMode="contain" />
      <Texto style={styles.nome}>{item.nome}</Texto>
      <Texto style={styles.descricao}>{item.descricao}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  descricao: {
    fontSize: 16,
    color: 'gray',
  },
});
