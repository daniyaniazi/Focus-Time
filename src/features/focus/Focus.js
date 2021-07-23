import React from "react";
4;
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
// named export
export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleConatiner}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: 20 }} />
          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleConatiner: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    paddingBottom: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
