import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';


export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View>
      <Text>My To-Do List</Text>
      <TextInput
        placeholder="Enter a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}
