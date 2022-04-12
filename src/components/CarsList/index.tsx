import React from 'react';
import {Dimensions, FlatList, StatusBar, View} from 'react-native';
import CarItem from '../CarItem';
import cars from '../../dataset/cars';
import styles from './styles';

export default function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={
          Dimensions.get('window').height + (StatusBar.currentHeight || 0)
        }
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      />
    </View>
  );
}
