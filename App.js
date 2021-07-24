import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
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

  const addFocusHistorySubjectWithState = (focusSubject, status) => {
    setFocusHistory([
      ...focusHistory,
      {
        subject: focusSubject,
        status: status
      }
    ]);
  };
  const onClear = () => {
    setFocusHistory([]);
  };
  console.log(focusHistory);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUS.COMPELTE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUS.FAIL);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory FocusHistory={focusHistory} onClear={onClear} />
        </>
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
