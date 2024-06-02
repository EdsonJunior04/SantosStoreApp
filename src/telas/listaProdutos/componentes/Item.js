import React from "react";
import { View, Image, StyleSheet } from "react-native"

import Texto from '../../../componentes/Texto'

export default function ItemLista({ item: { nome, imagem, descricao } }) {
    return <View style={styles.fundo}>
        <View style={styles.posicaoItem}>
            <View key={nome} style={styles.item}>
                <Texto style={styles.nome}>{nome}</Texto>
                <Texto style={styles.descricao}>{descricao}</Texto>
                <Image source={imagem} style={styles.imagem} resizeMode="contain" />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    posicaoItem: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        fontWeight: "500",
        color: "black",
    },
    item: {
        width: "80%",
        height: 300,
        backgroundColor: "#E4E4E4",
        borderRadius: 10,
        borderColor: "black",
        padding: 16,
        alignItems: "center",
        margin: 10
    },
    nome: {
        fontSize: 20,
        lineHeight: 26,
        marginLeft: 11,
        fontWeight: "bold",
        color: "black",
    },
    imagem: {
        width: 150,
        height: 150,
        marginTop: 30
    }
})