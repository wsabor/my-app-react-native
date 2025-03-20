import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Saudacao = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Olá, mundo! ( criado a partir de uma função)
      </Text>
      <View style={styles.square} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 16,
    margin: 16,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
});

export default Saudacao;
