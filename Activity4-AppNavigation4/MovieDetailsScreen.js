import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './globalStyles';

export default function MovieDetailsScreen({ route, navigation }) {

  const {
    title,
    year,
    genre,
    rating,
    description,
  } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.detailsTitle}>
        {title}
      </Text>

      <Text style={styles.detailsInfo}>
        Year: {year}
      </Text>

      <Text style={styles.detailsInfo}>
        Genre: {genre}
      </Text>

      <Text style={styles.detailsInfo}>
        Rating: ⭐ {rating}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          Go Back
        </Text>
      </TouchableOpacity>

    </View>
  );
}