import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import StyledButton from '../StyledButton';

import styles from './styles';

export default function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/ModelS.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <StyledButton
        type="primary"
        content="Custom Order"
        onPress={() => {
          console.warn('Custom order was pressed');
        }}
      />

      <StyledButton
        type="secondary"
        content="Existing Inventory"
        onPress={() => {
          console.warn('Existing Inventory was pressed');
        }}
      />
    </View>
  );
}
