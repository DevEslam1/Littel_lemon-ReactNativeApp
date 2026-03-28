import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, Fonts } from '../constants/theme';

interface ActionButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  style?: ViewStyle;
}

export function ActionButton({ title, onPress, variant = 'primary', style }: ActionButtonProps) {
  let backgroundColor: string = Colors.light.primary;
  let textColor: string = Colors.light.on_primary;

  if (variant === 'secondary') {
    backgroundColor = Colors.light.secondary_fixed;
    textColor = Colors.light.on_secondary_fixed;
  } else if (variant === 'tertiary') {
    backgroundColor = 'transparent';
    textColor = Colors.light.primary;
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor },
        style
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8, // lg rounded corners
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.sans, // Manrope
    fontWeight: '600',
    fontSize: 16,
  }
});
