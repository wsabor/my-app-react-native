import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class MeuComponente extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Olá, mundo! (Componente criado a partir de uma classe)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MeuComponente;
