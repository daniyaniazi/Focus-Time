import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Countdown } from "../../components/Countdown";
import { colors } from "../../utils/colors";
import { fontSizes, paddingSizes } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";
export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.Countdown}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View style={{ paddingTop: paddingSizes.xxxl }}>
        <Text style={styles.title}>Focusing On :</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
            title="Pause"
            size={60}
            onPress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title="Start"
            size={60}
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: { color: colors.white, textAlign: "center", fontSize: fontSizes.lg },
  task: { color: colors.white, fontWeight: "bold", textAlign: "center" },
  Countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  }
});
