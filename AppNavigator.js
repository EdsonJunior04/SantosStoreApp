import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produto from './caminho/para/Produto'; // Altere o caminho conforme necessário
import ListaDesejos from './caminho/para/ListaDesejos'; // Altere o caminho conforme necessário

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Produtos">
                <Stack.Screen name="Produtos" component={Produto} />
                <Stack.Screen name="ListaDesejos" component={ListaDesejos} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
