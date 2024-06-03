import React from 'react';
import { StyleSheet, Dimensions, Image, StatusBar, SafeAreaView } from 'react-native';

import Header from '../../../assests/produtos/camisa_santos_branca_jogo.png'
import Texto from '../../../componentes/Texto.js'

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
  return <SafeAreaView >
    <StatusBar />
    <Image source={Header} style={styles.topo} />
    <Texto style={styles.titulo}>{titulo}</Texto>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 1700 / 1600 * width,
    marginTop: 110
  },
  titulo: {
    width: "100%",
    position: "absolute",
    paddingTop: 40,
    alignItems: "center",
    marginLeft: 100,
    fontSize: 26,
    color: "black",
    fontWeight: "bold"
  },
});