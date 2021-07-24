import React, { useState } from "react";
import { StyleSheet, View, Text, Vibration, Platform } from "react-native";
import { Countdown } from "../../components/Countdown";
import { colors } from "../../utils/colors";
import { fontSizes, marginSizes, paddingSizes } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";
import { Timming } from "./Timming";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = 0.1;
export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onEnd = () => {
    // invoke when timer end
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const vibrate = () => {
    if (Platform.OS === "ios") {
      // vibrate after every 1 sec
      const interval = setInterval(() => {
        Vibration.vibrate();
      }, 1000);
      // vibrate only for 10 sec
      setTimeout(() => {
        clearInterval(interval);
      }, 10000);
    } else {
      Vibration.vibrate(10000);
      // on Andriod it does self cancle
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
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
            size={70}
            onPress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title="Start"
            size={70}
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}{" "}
        <View style={styles.clearButton}>
          <RoundedButton
            title="-"
            size={50}
            onPress={() => {
              clearSubject();
            }}
          />
        </View>
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
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  progressBar: {
    width: 500,
    margin: "auto"
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: marginSizes.md
  },
  clearButton: {
    margin: marginSizes.md,
    position: "absolute",
    bottom: 0,
    left: "20%"
  }
});
