import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

import Texto from '../../componentes/Texto';
import Styles from './estilos';

export default function Index({ textos }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <ScrollView style={Styles.sobre}>
            <Image source={textos.logo} style={Styles.logo} resizeMode="contain" />
            <Texto style={Styles.textoSobre}>{textos.historia}</Texto>
            <Image source={textos.img_producao} style={Styles.fotoFitas} resizeMode="contain" />
            <Texto style={Styles.textoSobre}>{textos.texto_imagem}</Texto>
            <Video 
                ref={video} 
                style={styles.video} 
                source={require('../../../assets/NEYMAR ROBINHO E GANSO.mp4')} // Use require para vídeos locais
                useNativeControls 
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)} 
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    video: {
        width: '100%', // Defina a largura do vídeo
        height: 300, // Defina uma altura para o vídeo
    },
});
