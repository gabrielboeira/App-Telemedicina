import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const TelaComBackground = () => {
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        // Define um temporizador para ocultar o texto após 3 segundos
        const timer = setTimeout(() => {
            setShowText(false);
        }, 2000);

        // Limpa o temporizador ao desmontar o componente
        return () => clearTimeout(timer);
    }, []);

    return (
        <ImageBackground
            source={require('/Users/HP/Desktop/react-project/project-rn/assets/atendimento.png')} // Caminho da sua imagem
            style={styles.backgroundImage} // Estilos para preencher a tela
        >
          <View style={styles.overlay}>
                {showText && <Text style={styles.texto}>Bem-vindo ao Atendimento!</Text>}
        </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Para cobrir toda a tela
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Sobreposição para melhorar a legibilidade do texto
        padding: 20,
        borderRadius: 8,
    },
    texto: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TelaComBackground;