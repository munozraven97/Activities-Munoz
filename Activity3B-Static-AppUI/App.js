import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import UserList from "./UserList";
import styles from "./globalStyles";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputText.trim() === "") {
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      text: inputText.trim(),
    };

    setItems([...items, newItem]);
    setInputText("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>
      <Text style={styles.subtitle}>
        Add your tasks below
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={inputText}
          onChangeText={setInputText}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addItem}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <UserList
        items={items}
        deleteItem={deleteItem}
      />
    </View>
  );
}