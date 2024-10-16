import React from "react";
import { View, Image, StyleSheet, Alert } from "react-native";

import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao'

export default function ItemLista({ item: { nome, imagem, descricao, botao } }) {

    async function addListaDesejos( nome, imagem) {

        //Produto favoritado
        const addProduto = [{
            
            nome: nome,
            imagem: imagem,
        }];

        //Verifica se a lista está vazia
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        if (listaDesejosSalva == null) {
            //Lista vazia, insere o procuto clicado
            const listaDesejosAtulizada = JSON.stringify(addProduto);

            //Insere no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtulizada);
            Alert.alert("O produto foi incluido com sucesso na Lista de Desejos!");
            console.log("Adicionou produto");
            console.log(listaDesejosAtulizada);
        } else {
            //A lista já possui itens
            const listaDesejos = JSON.parse(listaDesejosSalva);

            //Insere mais um produto na lista
            listaDesejos.push({ nome: nome, imagem: imagem });

            //Converte o Array para String
            const listaDesejosAtulizada = JSON.stringify(listaDesejos);

            //Insere no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtulizada);
            Alert.alert("O produto foi incluido com sucesso na Lista de Desejos!");
            console.log("Mais um produto na lista");
            console.log(listaDesejosAtulizada);
        }
    }







    return (
        <View style={styles.fundo}>
            <View style={styles.posicaoItem}>
                <View key={nome} style={styles.item}>
                    <Texto style={styles.nome}>{nome}</Texto>
                    <Texto style={styles.descricao}>{descricao}</Texto>
                    <Image source={imagem} style={styles.imagem} resizeMode="contain" />
                    <Botao style={styles.botao} textoBotao={botao} onPress={() => addListaDesejos(nome, imagem)} />
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
        width: 250,
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
