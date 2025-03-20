import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ExemploJSX = () => {
  const nome = "João";
  const idade = 20;
  const curso = "Técnico em Desenvolvimento de Sistemas";
  const urlImagem =
    "https://www.atakinteractive.com/hubfs/react-native%20%281%29.png";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {nome}!</Text>
      <Text style={styles.text}>Você tem {idade} anos.</Text>
      <Text style={styles.text}>Você está cursando o curso {curso}.</Text>
      <Image style={styles.image} source={{ uri: urlImagem }} />
      <TouchableOpacity onPress={() => alert("Clicou no botão!")}>
        <Text style={styles.button}>Não clique aqui, curioso!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: "rgb(200, 30, 30)",
    fontWeight: "bold" as "bold",
    textAlign: "center" as const,
    margin: 8,
  },
  image: {
    width: 180,
    height: 180,
    margin: 16,
  },
  button: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 8,
    width: 180,
    textAlign: "center" as const,
  },
};

export default ExemploJSX;
