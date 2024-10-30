import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';

export default function Perfil() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState('back');
    const [imageUri, setImageUri] = useState(null);
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState({});
    const cameraRef = useRef(null);

    useEffect(() => {
        const getPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getPermissions();
    }, []);

    const requestCameraPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setImageUri(photo.uri);
        }
    };

    const switchCamera = () => {
        setCameraType(cameraType === 'back' ? 'front' : 'back');
    };

    const fetchAddress = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data) {
                setAddress(response.data);
            } else {
                Alert.alert("CEP não encontrado.");
            }
        } catch (error) {
            Alert.alert("Erro ao buscar o endereço.");
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.cameraContainer}>
                {hasPermission === null && <Text style={styles.permissionText}>Aguardando permissão...</Text>}
                {hasPermission === false && (
                    <>
                        <Text style={styles.permissionText}>Permissão da câmera negada</Text>
                        <TouchableOpacity onPress={requestCameraPermission} style={styles.button}>
                            <Text style={styles.buttonText}>Pedir Permissão</Text>
                        </TouchableOpacity>
                    </>
                )}
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
                <TextInput
                    placeholder="Digite seu CEP"
                    keyboardType="numeric"
                    style={styles.input}
                    value={cep}
                    onChangeText={setCep}
                />
                <TouchableOpacity onPress={fetchAddress} style={styles.button}>
                    <Text style={styles.buttonText}>Buscar Endereço</Text>
                </TouchableOpacity>

                {address.logradouro && (
                    <View style={styles.addressContainer}>
                        <Text>Rua: {address.logradouro}</Text>
                        <Text>Bairro: {address.bairro}</Text>
                        <Text>Estado: {address.uf}</Text>
                    </View>
                )}
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
        height: 400,
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
    addressContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#e0e0e0',
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
