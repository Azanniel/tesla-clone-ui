import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import CarProps from '../../@types/Car';
import StyledButton from '../StyledButton';

import styles from './styles';

type CarItemProps = {
  car: CarProps;
};

export default function CarItem({car}: CarItemProps) {
  const {name, tagline, taglineCTA, image} = car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCta}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
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
    </View>
  );
}
