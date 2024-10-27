import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Topo from './componentes/Topo';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';

export default function ListaDesejos() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    const produtosSalvos = await AsyncStorage.getItem('ListaDesejos');
    if (produtosSalvos) {
      setProdutos(JSON.parse(produtosSalvos));
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <Topo />
      <Texto style={styles.titulo}>Lista de Desejos</Texto>
      <FlatList
        data={produtos}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  lista: {
    paddingBottom: 20,
  },
});
