import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name="Model 3"
        tagline="Order Online For"
        taglineCTA="Touchless Delivery"
        image={require('./assets/Model3.jpeg')}
      />

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
