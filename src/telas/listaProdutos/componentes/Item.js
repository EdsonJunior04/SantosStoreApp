import React from "react";
import { View, Image, StyleSheet, Alert } from "react-native";

import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao'

export default function ItemLista({ item: { nome, imagem, descricao, botao } }) {
    return (
        <View style={styles.fundo}>
            <View style={styles.posicaoItem}>
                <View key={nome} style={styles.item}>
                    <Texto style={styles.nome}>{nome}</Texto>
                    <Texto style={styles.descricao}>{descricao}</Texto>
                    <Image source={imagem} style={styles.imagem} resizeMode="contain" />
                    <Botao style={styles.botao} textoBotao={botao} acaoBotao={() => { Alert.alert("Em breve!", "Estamos preparando uma novidade para você.") }} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fundo: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    botao: {
        width: 250 ,
    },
    posicaoItem: {
        width: "90%",
        margin: 10
    },
    item: {
        backgroundColor: "#E4E4E4",
        borderRadius: 10,
        borderColor: "black",
        padding: 16,
        alignItems: "center"
    },
    descricao: {
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "500",
        color: "black",
        textTransform: "capitalize"
    },
    nome: {
        fontSize: 24,
        lineHeight: 26,
        fontWeight: "bold",
        color: "black",
        textTransform: "capitalize"
    },
    imagem: {
        width: 250,
        height: 250,
        marginTop: 30,
        borderRadius: 10
    },
});
