import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ExemploJSX = () => {
    const nome = "João";
    const idade = 20;
    const curso = "Técnico em Desenvolvimento de Sistemas";
    const urlImagem = "https://www.atakinteractive.com/hubfs/react-native%20%281%29.png";

    return (
        <View>
            <Text>Olá, {nome}!</Text>
            <Text>Você tem {idade} anos.</Text>
            <Text>Você está cursando o curso {curso}.</Text>
            <Image source={{ uri: urlImagem }} style={{ width: 150, height: 150 }} />
            <TouchableOpacity onPress={() => alert("Clicou no botão!")}>
                <Text>Pressione-me</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ExemploJSX;