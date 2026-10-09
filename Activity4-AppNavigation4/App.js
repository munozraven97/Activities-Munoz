import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import MovieListScreen from './MovieListScreen';
import MovieDetailsScreen from './MovieDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Movie Explorer' }}
        />

        <Stack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{ title: 'Movies' }}
        />

        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{ title: 'Movie Details' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}