import {
  useFonts,
  Kanit_200ExtraLight,
  Kanit_600SemiBold
} from '@expo-google-fonts/kanit';
import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produtos'
import Sobre from './src/telas/Sobre'
import Perfil from './src/telas/perfil'
import ListaProduto from './src/telas/listaProdutos'
import mock from './src/mocks/produto'
import mock_lista from './src/mocks/listaProduto'
import mock_sobre from './src/mocks/sobre'
import Texto from './src/componentes/Texto'


//Audio
import {Audio} from 'expo-av';

function MenuKit() {
  return <Produto {...mock} />
}

function MenuSobre() {
  return <Sobre {...mock_sobre} />
}

function MenuListaProduto() {
  return <ListaProduto {...mock_lista} />
}

function MenuPerfil() {
  return <Perfil  {...mock_sobre} />
}

function MenuAudio(){

  //Áudio para o APP
  const [audioStatus, setAudioStatus] = useState(false)
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/acdc_highway_to_hell.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={() => { if(!loading) {setAudioStatus(!audioStatus);}}}>
            <Texto>🎧 On/Off</Texto>
          </TouchableOpacity>
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Kit") {
          iconName = focused
            ? 'shirt'
            : 'shirt-outline';
        } else if (route.name === "Sobre nós") {
          iconName = focused
            ? 'apps'
            : 'apps-outline';
        } else if (route.name === "Perfil") {
          iconName = focused
            ? 'heart'
            : 'heart-outline';
        } else if (route.name === "Produtos") {
          iconName = focused
            ? 'grid'
            : 'grid-outline';
        } else if (route.name === "Lista de Desejos") {
          iconName = focused
            ? 'heart'
            : 'heart-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarHideOnKeyboard: true,
      headerShown: false,
    })}>
    <Tab.Screen name="Sobre nós" component={MenuSobre} />
    <Tab.Screen name="Kit" component={MenuKit} />
    <Tab.Screen name="Produtos" component={MenuListaProduto} />
    <Tab.Screen name="Lista de Desejos" component={MenuKit} />
    <Tab.Screen name="Perfil" component={MenuPerfil} />
  </Tab.Navigator>
}

export default function App() {

  //Carrega a fonte para dentro do projeto
  const [fonteCarregada] = useFonts({
    "KanitRegular": Kanit_200ExtraLight,
    "KanitBold": Kanit_600SemiBold
  });

  //Se a fonte não tiver sido carregada, não exibe o projeto
  if (!fonteCarregada) {
    return <View />
  }

  return <NavigationContainer >
    <TabsMenu />
    <MenuAudio />
  </NavigationContainer>
}