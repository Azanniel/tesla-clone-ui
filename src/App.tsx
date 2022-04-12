import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CarsList from './components/CarsList';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.container}>
        <CarsList />
      </View>
    </>
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
