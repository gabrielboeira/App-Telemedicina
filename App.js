import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen'; //Tela de login/Entrar
import HomeScreen from './screens/HomeScreen'; //Tela Home/Principal
import ScheduledScreen from './screens/ScheduledScreen'; //Tela de HstrcAtendimentos
import AtendimentoScreen from './screens/AtendimentoScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#085fce'
        },
        headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}>

        <Stack.Screen name="Login" component={LoginScreen} options={{ title: '' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{title: ''}} />
        <Stack.Screen name="Atendimentos" component={ScheduledScreen} options={{title: 'Consultas'}}/>
        <Stack.Screen name="Atendimento" component={AtendimentoScreen} options={{title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}