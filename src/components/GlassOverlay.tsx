import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../constants/theme';

interface GlassOverlayProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function GlassOverlay({ children, style }: GlassOverlayProps) {
  return (
    <View style={[styles.overlay, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(248, 250, 249, 0.85)', // 'surface' color at 85% opacity
    padding: 24,
    borderRadius: 16,
    // Note: Use 'expo-blur' for true gaussian blur backdrop filters if installed
    borderColor: 'rgba(194, 200, 196, 0.15)', // "Ghost border fallback" using outline_variant
    borderWidth: 1,
  }
});
