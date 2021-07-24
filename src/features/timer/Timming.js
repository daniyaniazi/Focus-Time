import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";

export const Timming = ({ OnChangeTime, min }) => {
  return (
    <View style={styles.TimmingButton}>
      <RoundedButton size={70} title={min} onPress={() => OnChangeTime(min)} />
    </View>
  );
};
const styles = StyleSheet.create({
  TimmingButton: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  }
});
