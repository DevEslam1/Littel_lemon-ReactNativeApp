import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../constants/theme';

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tertiary_fixed,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 8,
    alignSelf: 'flex-start',
  },
  text: {
    color: Colors.light.on_tertiary_fixed,
    fontFamily: Fonts.serif, // Manrope
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  }
});
