import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Focus } from "./src/features/focus/Focus";
import { Timer } from "./src/features/timer/Timer";
import { colors } from "./src/utils/colors";
import { paddingSizes } from "./src/utils/sizes";

// this file exports App
export default function App() {
  const [focusSubject, setFocusSubject] = useState("gardening");
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingSizes.lg,
    backgroundColor: colors.darkGreen
  }
});
