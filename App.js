import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Focus } from "./src/features/focus/Focus";

// this file exports App
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where i am going to build a time</Text>
      ) : (
        <Focus />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#225225",

    alignItems: "center",
    justifyContent: "center"
  }
});
