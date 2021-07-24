import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import { Focus } from "./src/features/focus/Focus";
import { FocusHistory } from "./src/features/focus/FocusHistory";
import { Timer } from "./src/features/timer/Timer";
import { colors } from "./src/utils/colors";
import { paddingSizes } from "./src/utils/sizes";

const STATUS = {
  COMPELTE: 1,
  FAIL: 0
};
// this file exports App
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithStatus = (focusSubject, status) => {
    setFocusHistory([
      ...focusHistory,
      {
        key: String(focusHistory.length + 1),
        subject: focusSubject,
        status: status
      }
    ]);
  };
  const onClear = () => {
    setFocusHistory([]);
  };
  const saveHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (error) {
      console.log(error);
    }
  };
  const loadHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      console.log(history);
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // save every time we have a new history
  useEffect(() => {
    saveHistory();
  }, [focusHistory]);
  // load on component mount
  useEffect(() => {
    loadHistory();
  }, []);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithStatus(focusSubject, STATUS.COMPELTE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithStatus(focusSubject, STATUS.FAIL);
            setFocusSubject(null);
          }}
        />
      ) : (
        <View style={styles.innerContainer}>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory FocusHistory={focusHistory} onClear={onClear} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingSizes.lg,
    backgroundColor: colors.darkGreen,
    alignItems: "center",
    justifyContent: "center"
  },
  innerContainer: {
    flex: 0.9
  }
});
