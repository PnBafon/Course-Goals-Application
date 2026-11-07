import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({goalData}) => {
  return (
    <View style={styles.goalItem} key={goalData.index}>
      <Text style={{ color: "#fff" }}>{goalData.item.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
