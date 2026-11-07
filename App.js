import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";


const App = () => {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(goalInput) {
    setGoals((goals) => [
      ...goals,
      {
        text: goalInput,
        id: Math.random().toString(),
      },
    ]);

    endAddGoalHanlder()
  }

  function deleteGoalHandler(index) {
    setGoals((oldItems) => oldItems.filter((item) => item.id !== index));
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHanlder(){
    setModalIsVisible(false)
  }

  return (
   <>
   <StatusBar style="light"/>
     <View style={styles.container}>
      <Button
        title="Add New Goal"
        color={"#c094f8"}
        onPress={startAddGoalHandler}
      />

      <GoalInput addGoalHandler={addGoalHandler} modalIsVisible={modalIsVisible} endAddGoalHanlder={endAddGoalHanlder} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(goalData) => (
            <GoalItem goalData={goalData} onDeleteItem={deleteGoalHandler} />
          )}
        ></FlatList>
      </View>
    </View>
   </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 8,
    
  },
  listContainer: {
    flex: 8,
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 8,
  },
});
