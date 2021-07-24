import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Countdown } from "../../components/Countdown";
import { colors } from "../../utils/colors";
import { fontSizes, paddingSizes } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setprogress] = useState(1);
  const onProgress = (progress) => {
    setprogress(progress);
  };
  return (
    <View style={styles.container}>
      <View style={styles.Countdown}>
        <Countdown isPaused={!isStarted} onProgress={onProgress} />
      </View>
      <View style={{ paddingTop: paddingSizes.xxxl }}>
        <Text style={styles.title}>Focusing On :</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar
          progress={progress}
          color={colors.lightGreen}
          style={{ height: 10 }}
        />
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
  },
  progressBar: {
    width: 500,
    margin: "auto"
  }
});
