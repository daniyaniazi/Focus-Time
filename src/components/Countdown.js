import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, paddingSizes } from "../utils/sizes";

const minutesToMilis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 20, isPaused }) => {
  const [millis, setMillis] = useState(minutesToMilis(minutes));
  const interval = React.useRef(null);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  const countDown = () => {
    setMillis((millis) => {
      if (millis === 0) {
        return millis;
      }
      const timeLeft = millis - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    //run count down every 1 sec
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  });
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: paddingSizes.lg,
    backgroundColor: "rgba(94,132,226,0.2)",
    borderRadius: fontSizes.sm
  }
});
