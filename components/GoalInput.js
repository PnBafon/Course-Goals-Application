import { StyleSheet, TextInput, Button, View, Modal, Image } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ addGoalHandler, modalIsVisible, endAddGoalHanlder }) => {
  const [goalInput, setGoalInput] = useState("");

  const addGoalInputHandler = () => {
    if (!goalInput) return;
    addGoalHandler(goalInput);
    setGoalInput("");
  };
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputHolder}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          value={goalInput}
          onChangeText={(enteredText) => setGoalInput(enteredText)}
          placeholder="Your course goal!"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
           <View  style={styles.button}>
             <Button title="ADD GOAL" color={"#9240fc"} onPress={addGoalInputHandler} />
           </View>
            <View style={styles.button}>
                <Button title="Cancel" color={"#f31282"} onPress={endAddGoalHanlder} />
            </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputHolder: {
    flex: 1,
    gap: 2,
    justifyContent: "center",
    alignItems: 'center', 
    padding: 16,
    backgroundColor: '#311b6b'
  },
  input: {
    width: '100%', 
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",

    padding: 16,
    color: "#120438",
    borderRadius: 6,


  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  }, 
  button: {
    width: '30%', 
    marginHorizontal: 8
  }, 
  image: {
    width: 100, 
    height: 100, 
    margin: 20
  }
});
