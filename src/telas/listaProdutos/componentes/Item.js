import React from "react";
import { View, Image, StyleSheet, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ItemLista({ item: { id, nome, imagem, descricao, botao } }) {

    // Função para inserir itens na lista de desejos
    async function addListaDesejos(id, nome, imagem, descricao) {
        const newProduto = { id, nome, imagem, descricao };
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');


        // Se a lista não existe, cria uma nova
        if (listaDesejosSalva == null) {
            const listaDesejosAtualizada = JSON.stringify([newProduto]);
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            console.log(newProduto);
            Alert.alert("Inserido na Lista de Desejos com sucesso.");
        } else {
            // A lista já existe, adiciona o novo produto
            const listaDesejos = JSON.parse(listaDesejosSalva);
            listaDesejos.push(newProduto);
            await AsyncStorage.setItem('ListaDesejos', JSON.stringify(listaDesejos));
            console.log(newProduto);
            Alert.alert("Inserido na Lista de Desejos com sucesso.");
        }
    }

    return (
        <View style={styles.fundo}>
            <View style={styles.posicaoItem}>
                <View key={nome} style={styles.item}>
                    <Texto style={styles.nome}>{id}</Texto>
                    <Texto style={styles.nome}>{nome}</Texto>
                    <Texto style={styles.descricao}>{descricao}</Texto>
                    <Image source={imagem} style={styles.imagem} resizeMode="contain" />
                    {/* <Botao style={styles.botao} textoBotao={botao} onPress={() => addListaDesejos(id, nome, imagem, descricao)} /> */}
                    <TouchableOpacity onPress={() => addListaDesejos(id, nome, imagem, descricao)}>
                        <Ionicons name="heart" size={30} color="red" />
                    </TouchableOpacity>
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
