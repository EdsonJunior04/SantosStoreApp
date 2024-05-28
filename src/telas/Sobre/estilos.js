import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    fotoFitas: {
        height: 350,
        width: 350,
        alignSelf: "center",
        // backgroundColor: "white"
    },
    sobre:{
        backgroundColor: "black",
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
    textoSobre: {
        fontSize: 20,
        lineHeight: 26,
        marginBottom: 10,
        color: "white",
        textAlign: "justify"
    },
})

export default styles;