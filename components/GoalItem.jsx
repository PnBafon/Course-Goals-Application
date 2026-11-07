import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({ goalData, onDeleteItem }) => {
  return (
    <Pressable
      onPress={() => onDeleteItem(goalData.item.id)}
    //   
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem} key={goalData.index}>
        <Text style={{ color: "#fff" }}>{goalData.item.text}</Text>
      </View>
    </Pressable>
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
  pressedItem: {
    opacity: 0.5,
  },
});
