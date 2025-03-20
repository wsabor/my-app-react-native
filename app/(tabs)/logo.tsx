import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/senai-logo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 50,
    margin: 16,
    alignSelf: "center",
  },
});

export default Logo;
