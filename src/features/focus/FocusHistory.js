import React from "react";
import { StyleSheet, View, Text, FlatList, SafeAreaView } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/colors";
import { fontSizes, marginSizes } from "../../utils/sizes";

const HistoryItem = ({ item, index }) => {
  console.log(item);
  return <Text style={styles(item.status).Item}>{item.subject}</Text>;
};

export const FocusHistory = ({ FocusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <SafeAreaView style={styles().container}>
      <Text style={styles().title}>Thing's I have focused on</Text>
      {!!FocusHistory.length ? (
        <>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItems: "center" }}
            data={FocusHistory}
            renderItem={HistoryItem}
          />
          <View style={styles().clearContainer}>
            <RoundedButton
              size={50}
              title={"X"}
              onPress={() => clearHistory()}
            />
          </View>
        </>
      ) : (
        <Text style={styles().indicator}>No items to show</Text>
      )}
    </SafeAreaView>
  );
};
const styles = (status) =>
  StyleSheet.create({
    container: {
      flex: 0.6,
      alignItems: "center",
      marginHorizontal: marginSizes.sm
    },
    title: { color: colors.white, fontWeight: "bold", fontSize: fontSizes.xl },
    Item: {
      color: status === 0 ? colors.lightRed : colors.lightGreen,
      fontWeight: "bold",
      fontSize: fontSizes.lg
    },
    indicator: {
      color: colors.white,
      fontSize: fontSizes.md,
      fontStyle: "italic"
    },
    clearContainer: {
      alignItems: "center",
      position: "absolute",
      bottom: 10,
      right: 10
    }
  });
