import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ItemLista from './componentes/Item';
import Texto from '../../componentes/Texto';

export default function ListaProduto({ itens }) {
  return (
    <FlatList
      data={itens.lista}
      renderItem={ItemLista}
      keyExtractor={item => item.id.toString()} // Use o id como chave
      ListHeaderComponent={() => (
        <View style={styles.posicao}>
          <Texto style={styles.titulo}>{itens.titulo}</Texto>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    color: "black",
    fontWeight: "bold"
  },
  posicao: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  }
});
