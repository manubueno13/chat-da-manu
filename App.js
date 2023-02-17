import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet } from 'react-native';

import Chat from "./pages/chat"
import Home from "./pages/home"
import Inicial from "./pages/inicial"
import Perfil from "./pages/perfil"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName = "inicial" screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="chat" component={Chat} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="inicial" component={Inicial} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
