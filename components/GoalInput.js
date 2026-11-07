import { StyleSheet, TextInput, Button, View } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ addGoalHandler }) => {
  const [goalInput, setGoalInput] = useState("");
  
  const addGoalInputHandler = () => {
    if (!goalInput) return;
    addGoalHandler(goalInput);
    setGoalInput("");
  };
  return (
    <View style={styles.inputHolder}>
      <TextInput
        value={goalInput}
        onChangeText={(enteredText) => setGoalInput(enteredText)}
        placeholder="Your course goal!"
        style={styles.input}
      />
      <Button title="ADD GOAL" color={"blue"} onPress={addGoalInputHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputHolder: {
    flex: 1,
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 8,
    color: "#333",
    borderRadius: 8,
  },
});
