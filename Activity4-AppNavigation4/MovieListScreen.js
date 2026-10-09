import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './globalStyles';

const movies = [
  {
    id: 1,
    title: 'Interstellar',
    year: 2014,
    genre: 'Science Fiction',
    rating: '8.7/10',
    description:
      'A group of explorers travel through a wormhole in space in search of a new home for humanity.',
  },
  {
    id: 2,
    title: 'Inception',
    year: 2010,
    genre: 'Science Fiction',
    rating: '8.8/10',
    description:
      'A skilled thief who enters the dreams of others is given a difficult mission involving an idea that must be planted inside a target.',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: '9.0/10',
    description:
      'Batman faces a dangerous criminal mastermind who creates chaos throughout Gotham City.',
  },
  {
    id: 4,
    title: 'Spider-Man: No Way Home',
    year: 2021,
    genre: 'Action / Adventure',
    rating: '8.2/10',
    description:
      'Spider-Man faces unexpected consequences after his secret identity is revealed to the world.',
  },
];

export default function MovieListScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>

      <Text style={styles.sectionTitle}>Available Movies</Text>

      {movies.map((movie) => (
        <View key={movie.id} style={styles.movieCard}>

          <Text style={styles.movieTitle}>
            {movie.title}
          </Text>

          <Text style={styles.movieInfo}>
            {movie.year} • {movie.genre}
          </Text>

          <Text style={styles.rating}>
            ⭐ {movie.rating}
          </Text>

          <TouchableOpacity
            style={styles.smallButton}
            onPress={() =>
              navigation.navigate('MovieDetails', {
                title: movie.title,
                year: movie.year,
                genre: movie.genre,
                rating: movie.rating,
                description: movie.description,
              })
            }
          >
            <Text style={styles.buttonText}>
              View Details
            </Text>
          </TouchableOpacity>

        </View>
      ))}

    </ScrollView>
  );
}