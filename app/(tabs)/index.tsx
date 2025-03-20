import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "./logo";

const App = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>
        Curso Técnico em Desenvolvimento de Sistemas
      </Text>
      <Text style={styles.subtitle}>Portfolio de apps:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/MeuComponente")}
      >
        <Text style={styles.buttonText}>Meu Componente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Saudacao")}
      >
        <Text style={styles.buttonText}>Saudação</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/ExemploJSX")}
      >
        <Text style={styles.buttonText}>ExemploJSX</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    gap: 8,
  },
  button: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
    paddingHorizontal: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    paddingHorizontal: 32,
    marginBottom: 8,
  },
});

export default App;
