import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, View, TouchableOpacity, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  // CPF e senha padrão para validação
  const cpfPadrao = '04930943000';  // Exemplo de CPF
  const senhaPadrao = '123456';   // Exemplo de senha

  const handleLogin = () => {
    if (cpf === '' || senha === '') {
      Alert.alert('Preencha todos os campos!')
    } else if (cpf === cpfPadrao & senha === senhaPadrao) {
      // Navega para a Home se o CPF e a senha estiverem corretos
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'CPF ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.image} />
      <Text style={styles.text}>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        maxLength={11}
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        keyboardType='numeric'
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 25,
  },
  image: {
    width: 200, // Largura da imagem
    height: 250, // Altura da imagem
    marginBottom: 30,
    right: -80,
    marginTop: -50,
  },
  title: {
    fontSize: 55,
    color: 'rgb(25, 118, 210);',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 150,
  },
  input: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#085fce',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#A9A9A9',
  }
});
