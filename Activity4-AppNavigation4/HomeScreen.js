import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>🎬 Movie Explorer</Text>

      <Text style={styles.subtitle}>
        Discover movies and explore their details and Also Enjoy.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MovieList')}
      >
        <Text style={styles.buttonText}>Browse Movies</Text>
      </TouchableOpacity>

    </View>
  );
}