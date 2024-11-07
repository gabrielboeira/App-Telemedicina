import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

export default function ScheduledScreen() {

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
             {/* Bloco 1 */}
      <View style={styles.block}>
        <Text style={styles.blockTitle}>Pronto-Atendimento</Text>
        <Text>Dr: Junior Silva - CRM:1234567-00/RS</Text>
        <Text>13H34 - 14H20</Text>
      </View>

      {/* Bloco 2 */}
      <View style={styles.block}>
        <Text style={styles.blockTitle}>Pronto-Atendimento</Text>
        <Text>Dra: Fernanda Maria - CRM:1234567-00/RS</Text>
        <Text>13H34 - 14H20</Text>
      </View>

      {/* Bloco 3 */}
      <View style={styles.block}>
        <Text style={styles.blockTitle}>Endocrinologia</Text>
        <Text>Dr: Marcelo Fraga - CRM:1234567-00/RS</Text>
        <Text>13H34 - 14H20</Text>
      </View>

       {/* Bloco 4 */}
       <View style={styles.block}>
        <Text style={styles.blockTitle}>Neurologia</Text>
        <Text>Dr: Gabriel Dias - CRM:1234567-00/RS</Text>
        <Text>13H34 - 14H20</Text>
      </View>

       {/* Bloco 5 */}
       <View style={styles.block}>
        <Text style={styles.blockTitle}>Nutricionista</Text>
        <Text>Dra: Juliana Melo - CRM:1234567-00/RS</Text>
        <Text>13H34 - 14H20</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Pronto-Atendimento</Text>
        <Text>Dr: Junior Silva - CRM:1234567-00/RS</Text>
        <Text>12H24 - 13H02</Text>
      </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
      paddingVertical: 20,  

    },
    block: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 3, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      text: {
        fontSize: 18,
        color: '#333',
      },
      blockTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      },
});