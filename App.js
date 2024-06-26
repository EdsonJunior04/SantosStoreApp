import {
  useFonts,
  Kanit_200ExtraLight,
  Kanit_600SemiBold
} from '@expo-google-fonts/kanit';
import { View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produtos'
import Sobre from './src/telas/Sobre'
import ListaProduto from './src/telas/listaProdutos'
import mock from './src/mocks/produto'
import mock_lista from './src/mocks/listaProduto'
import mock_sobre from './src/mocks/sobre'

function MenuKit() {
  return <Produto {...mock} />
}

function MenuSobre() {
  return <Sobre {...mock_sobre} />
}

function MenuListaProduto() {
  return <ListaProduto {...mock_lista} />
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
  </NavigationContainer>
}