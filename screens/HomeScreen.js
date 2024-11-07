import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ImageBackground, Image} from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleSolicitarAtendimento = () => {
    navigation.navigate('Atendimento')
  };

  const handleHistoricodeconsultas = () => {
    navigation.navigate('Atendimentos')
  }

  const handleAgendar = () => {
    navigation.navigate('Agendar')
  }

  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.image} />
      <Text style={styles.text}>Bem-vindo(a)</Text>
      
      {/* Botão "Solicitar atendimento" */}
      <TouchableOpacity style={styles.button} onPress={handleSolicitarAtendimento}>
        <Text style={styles.buttonText}>Solicitar atendimento</Text>
      </TouchableOpacity>

      {/* Botão de "Agendamento" */}
      <TouchableOpacity style={styles.button} onPress={handleAgendar}>
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>

      {/* Botão de "historico de consultas" */}
      <TouchableOpacity style={styles.button} onPress={handleHistoricodeconsultas}>
        <Text style={styles.buttonText}>Historico de consultas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 180, // Largura da imagem
    height: 180, // Altura da imagem
    marginBottom: 10,
    right: -4,
    marginTop: -130,
  },
  text: {
    fontSize: 24,
    color: 'rgb(25, 118, 210)',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgb(25, 118, 210)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
