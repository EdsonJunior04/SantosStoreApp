import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';

export default function Perfil() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [imageUri, setImageUri] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        const getPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getPermissions();
    }, []);

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setImageUri(photo.uri);
        }
    };

    const switchCamera = () => {
        setCameraType(
            cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.cameraContainer}>
                {hasPermission === null && <Text style={styles.permissionText}>Esperando a permissão...</Text>}
                {hasPermission === false && <Text style={styles.permissionText}>Permissão da câmera negada</Text>}
                {hasPermission && (
                    <Camera
                        ref={cameraRef}
                        style={styles.camera}
                        type={cameraType}
                    />
                )}
            </View>

            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={takePicture} style={styles.button}>
                    <Text style={styles.buttonText}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={switchCamera} style={styles.button}>
                    <Text style={styles.buttonText}>Virar Câmera</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Digite seu nome" style={styles.input} />
                <TextInput placeholder="Digite seu email" style={styles.input} />
                <TextInput placeholder="Digite sua idade" keyboardType="numeric" style={styles.input} />
            </View>

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => Alert.alert("Cadastro Salvo!!!")}
            >
                <Text style={styles.submitButtonText}>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    cameraContainer: {
        height: 400, // Define a altura da câmera
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#000',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
    },
    image: {
        width: '100%',
        height: 300,
        marginVertical: 10,
        borderRadius: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    submitButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    permissionText: {
        textAlign: 'center',
        marginVertical: 10,
        color: '#f00',
    },
});
