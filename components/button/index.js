import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.backgroundColor,
      width: props.width,
      height: props.height,
      borderRadius: 45,
      margin: 5,
      flex: props.style
    },
    text: {
      fontSize: props.fontSize,
      color: props.color,
      backgroundColor: props.backgroundColor,
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
