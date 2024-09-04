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
                {hasPermission === null && <Text>Esperando a permissão...</Text>}
                {hasPermission === false && <Text>Permissão da câmera negada</Text>}
                {hasPermission && (
                    <View style={styles.cameraView}>
                        <Camera
                            ref={cameraRef}
                            style={styles.camera}
                            type={cameraType}
                        />
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity onPress={takePicture} style={styles.button}>
                                <Text style={styles.buttonText}>Tirar Foto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={switchCamera} style={styles.button}>
                                <Text style={styles.buttonText}>Virar Câmera</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>

            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

            <TextInput placeholder="Digite seu nome" style={styles.input} />
            <TextInput placeholder="Digite seu sobrenome" style={styles.input} />
            <TextInput placeholder="Digite sua idade" keyboardType="numeric" style={styles.input} />

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
    },
    cameraContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraView: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    camera: {
        flex: 1,
        height: 400,
        borderRadius: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 10,
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
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
});
