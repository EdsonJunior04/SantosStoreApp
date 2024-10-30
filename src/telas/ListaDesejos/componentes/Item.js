import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Texto from '../../../componentes/Texto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Item({ id, nome, imagem, descricao }) {

  const navigation = useNavigation();

   // Função para remover itens da Lista de Desejos
   async function removeProdListaDesejos(id) {
    const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
    const listaDesejos = JSON.parse(listaDesejosSalva);

    const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item) => item.id !== id));
    await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
    Alert.alert("Produto removido da Lista de Desejos.");
    navigation.reset({ index: 0, routes: [{ name: 'Lista de Desejos' }] });
  }
  
  return (
    <View style={styles.item}>
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Texto style={styles.nome}>{nome}</Texto>
      <Texto style={styles.descricao}>{descricao}</Texto>
      <TouchableOpacity onPress={() => removeProdListaDesejos(id)} style={styles.trashIcon}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
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
