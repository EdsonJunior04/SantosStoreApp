import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

import Texto from '../../componentes/Texto'
import Styles from './estilos'
import styles from "./estilos";

export default function Index({ textos }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return <ScrollView style={Styles.sobre}>
        <Image source={textos.logo} style={Styles.logo} resizeMode="contain"></Image>
        <Texto style={Styles.textoSobre}>{textos.historia}</Texto>
        <Image source={textos.img_producao} style={Styles.fotoFitas} resizeMode="contain" />
        <Texto style={Styles.textoSobre}>{textos.texto_imagem}</Texto>
        <Video ref={video} style={styles.video} source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} useNativeControls resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)} />
    </ScrollView>
}