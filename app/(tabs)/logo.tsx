import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/senai-logo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    minWidth: 200,
    minHeight: 50,
    maxWidth: 300,
    maxHeight: 70,
    margin: 16,
    alignSelf: "center",
  },
});

export default Logo;
