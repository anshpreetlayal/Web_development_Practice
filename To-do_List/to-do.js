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
