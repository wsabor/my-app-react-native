import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "./logo";

const App = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Logo />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/MeuComponente")}
      >
        <Text style={styles.buttonText}>Meu Componente</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

export default App;
