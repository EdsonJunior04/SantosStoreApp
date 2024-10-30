import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Topo from './componentes/Topo';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function ListaDesejos() {
  const [listData, setListData] = useState([]);
  const navigation = useNavigation();

  // Função para carregar os dados da lista do AsyncStorage
  const loadListData = async () => {
    const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
    if (storedObjectJSON !== null) {
      const storedObject = JSON.parse(storedObjectJSON);
      setListData(storedObject);
    }
  };

  // Carrega a lista quando o componente for montado
  useEffect(() => {
    loadListData();
  }, []);

  // Função para limpar o AsyncStorage
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage limpo com sucesso');
      Alert.alert("Lista de Desejos excluída com sucesso.");
      navigation.reset({ index: 0, routes: [{ name: 'Lista de Desejos' }] });
    } catch (error) {
      console.error('Erro ao limpar o AsyncStorage:', error);
    }
  };

 

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Item item={item} />
      <TouchableOpacity onPress={() => removeProdListaDesejos(item.id)} style={styles.trashIcon}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Topo />
      <Texto style={styles.titulo}>Lista de Desejos</Texto>
      <FlatList
        data={listData}
        renderItem={({item})=><Item {...item}/>}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity onPress={clearAsyncStorage} style={styles.botao}>
        <Texto style={styles.botaoTexto}>Apagar Lista de Desejos</Texto>
      </TouchableOpacity>
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
  itemContainer: {
    backgroundColor: '#E4E4E4',
    borderRadius: 10,
    padding: 16,
    marginVertical: 5,
    alignItems: 'center', 
  },
  trashIcon: {
    marginTop: 10,
  },
  botao: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
  },
});
