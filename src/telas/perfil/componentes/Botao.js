import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Texto from '../componentes/Texto'

export default function Botao({textoBotao, acaoBotao}){

    return <TouchableOpacity style={styles.botao} onPress={acaoBotao}> 
                <Texto style={styles.botaoTexto} >{textoBotao}</Texto>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "white",
        paddingVertical: 16,
        borderRadius: 6,
        width: 100,
    },
    botaoTexto: {
        textAlign: "center",
        color: "#000000",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },
})