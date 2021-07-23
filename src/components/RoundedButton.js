import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// staateless function
export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius]} {...props}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

// styles is outside of the context of componenet
// so create a function
const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "white",
      borderWidth: 2
    },
    text: {
      color: "white",
      fontSize: size / 3
    }
  });
