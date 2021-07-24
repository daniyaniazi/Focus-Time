import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/colors";
import { fontSizes, marginSizes, paddingSizes } from "../../utils/sizes";
// named export
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleConatiner}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            // onSubmitEditing={({ nativeEvent }) => {
            //   if (nativeEvent.text) {
            //     setSubject(nativeEvent.text);
            //   }
            // }}
            onChangeText={(text) => setSubject(text)}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => {
              console.log(subject);
              if (subject) addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    marginVertical: marginSizes.md
  },
  titleConatiner: {
    paddingHorizontal: paddingSizes.md,
    justifyContent: "center"
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
    paddingBottom: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
