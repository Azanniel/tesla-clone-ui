import React from 'react';
import {Pressable, Text, View} from 'react-native';

import styles from './styles';

type StyledButtonProps = {
  type: 'primary' | 'secondary';
  content: string;
  onPress(): void;
};

export default function StyledButton({
  type,
  content,
  onPress,
}: StyledButtonProps) {
  const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
  const textColor = type === 'primary' ? '#ffffff' : '#171a20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={onPress}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
}
