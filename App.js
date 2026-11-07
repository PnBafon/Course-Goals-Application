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

const App = () => {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(goalInput) {
  
    setGoals((goals) => [
      ...goals,
      {
        text: goalInput,
        id: Math.random().toString(),
      },
    ]);
    console.log(goals);
  }

  return (
    <View style={styles.container}>
      
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.listContainer}>
        <Text>List of goals ... </Text>
        <FlatList
          data={goals}
          keyExtractor={(item, index)=>{ return item.id}}
          renderItem={(goalData) => (
            <GoalItem goalData ={goalData} />
          )}
        ></FlatList>
      </View>
    </View>
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
