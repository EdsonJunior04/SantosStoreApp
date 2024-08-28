    import React, { useState, useEffect } from "react";
    import { ScrollView, TextInput, Alert, View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
    import { Camera, CameraType } from "expo-camera";
    import * as Permissions from 'expo-permissions';

    import Botao from "./componentes/Botao";

    export default function Perfil() {
        const [hasPermission, setHasPermission] = useState(null);
        const [type, setType] = useState(CameraType.back);
        const [image, setImage] = useState(null);

        useEffect(() => {
            (async () => {
                const { status } = await Permissions.askAsync(Permissions.CAMERA);
                setHasPermission(status === 'granted');
            })();
        }, []);

        const takePicture = async () => {
            if (cameraRef) {
                const data = await cameraRef.current.takePictureAsync(null);
                setImage(data.uri);
            }
        };

        const flipCamera = () => {
            setType(
                type === CameraType.back ? CameraType.front : CameraType.back
            );
        };

        return (
            <ScrollView >
                
                <View style={{ flex: 1 }}>
                    {hasPermission === null && <Text>Esperando a permissão...</Text>}
                    {hasPermission === false && <Text>Permissão da camera negada</Text>}
                    <Text>AQUI</Text>
                    {hasPermission === true && (
                        <View style={{ flex: 1 }}>
                            <Camera style={{ flex: 1, height: 600 }} type={type} ref={(ref) => {
                                cameraRef = ref;
                            }} />
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    onPress={takePicture}>
                                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Tirar Foto</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={flipCamera}>
                                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Virar Camera</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                     )} 
                </View>
                
                {image && <Image source={{ uri: image }} style={{ width: 900, height: 900 }} />}
                
                <TextInput placeholder="Digite seu nome" />
                <TextInput placeholder="Digite seu sobrenome" />
                <TextInput placeholder="Digite sua idade" keyboardType="numeric" />

                <Botao acaoBotao={() => { Alert.alert("Cadastro Salvo!!!") }} />
            </ScrollView>
        );
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