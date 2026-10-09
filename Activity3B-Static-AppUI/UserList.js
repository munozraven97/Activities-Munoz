import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import styles from "./globalStyles";

export default function UserList({ items, deleteItem }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemText}>
          {item.text}
        </Text>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteItem(item.id)}
        >
          <Text style={styles.deleteButtonText}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <Text style={styles.emptyText}>
          No tasks yet. Add a task above.
        </Text>
      }
    />
  );
}