import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 250,
        alignSelf: "center",
    },
    fotoFitas: {
        height: 300,
        width: 300,
        alignSelf: "center",
        margin: 20
    },
    sobre:{
        backgroundColor: "#E4E4E4",
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
      video: {
        width: 300,
        height: 250
      }
      ,
    textoSobre: {
        fontSize: 20,
        lineHeight: 26,
        marginBottom: 10,
        color: "black",
        textAlign: "justify"
    },
})

export default styles;