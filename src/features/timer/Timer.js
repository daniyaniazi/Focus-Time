import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Countdown } from "../../components/Countdown";
import { colors } from "../../utils/colors";
import { fontSizes, paddingSizes } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";
import { Timming } from "./Timming";
import { useKeepAwake } from "expo-keep-awake";

export const Timer = ({ focusSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(20);
  const onProgress = (progress) => {
    setProgress(progress);
  };
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.Countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
        />
      </View>
      <View style={{ paddingTop: paddingSizes.sm }}>
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
      <View style={styles.timerContainer}>
        <Timming OnChangeTime={changeTime} min={10} />
        <Timming OnChangeTime={changeTime} min={15} />
        <Timming OnChangeTime={changeTime} min={20} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
            title="Pause"
            size={75}
            onPress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title="Start"
            size={75}
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
    flex: 0.4,
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
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
