import React from 'react';
import { FlatList, StyleSheet, View} from 'react-native';

import ItemLista from './componentes/Item'
import Texto from '../../componentes/Texto'

export default function ListaProduto({itens}){
    return <FlatList
                data={itens.lista}
                renderItem={ItemLista}
                keyExtractor={itens.lista.nome} 
                ListHeaderComponent={()=> {
                  return <>
                    
                    <View>
                      <Texto style={styles.titulo}>{itens.titulo}</Texto>
                    </View>
                  </>
                }}
              />
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    color: "purple",
    fontWeight: "bold",
    marginLeft: 10,
  }

})