import React from 'react';
import { StyleSheet, Image, View, Alert} from 'react-native';

import Texto from '../../../componentes/Texto'
import Botao from '../../../componentes/Botao'

export default function Produto({nome, logo, detalhes, preco, botao}){
    return <View style={styles.produto}>
            <View style={styles.logotipo}>
              <Image source={logo} style={styles.logo} resizeMode='contain'/>
              <Texto style={styles.nome}>{nome}</Texto>
            </View>
            <Texto style={styles.descricao}>{detalhes}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <Botao textoBotao={botao} acaoBotao={()=>{Alert.alert("Em breve!", "Estamos preparando uma novidade para você.")}}/>
        </View>
}

const styles = StyleSheet.create({
    produto: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    nome: {
      color: "black",
      fontSize: 26,
      fontWeight: "bold",
      paddingTop: 20,
      paddingLeft: 8,
    },
    descricao: {
      color: "gray",
      fontSize: 18,
    },
    preco: {
      color: "black",
      fontSize: 26,
      fontWeight: "bold",
      marginTop: 8,
      textAlign: "center",

    },
    logo: {
      width: 70,
      height: 70,
    },
    logotipo: {
      flexDirection: "row",
    },
  });