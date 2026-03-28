import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MenuItem } from '../models/MenuItem';
import { Colors, Fonts } from '../constants/theme';
import { Tag } from './Tag';

interface MenuItemCardProps {
  item: MenuItem;
  onPress?: () => void;
  actionButtonContext?: React.ReactNode;
}

export function MenuItemCard({ item, onPress, actionButtonContext }: MenuItemCardProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress} 
      disabled={!onPress}
      activeOpacity={0.9}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        
        {item.tags && item.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {item.tags.map(tag => (
              <Tag key={tag} label={tag} />
            ))}
          </View>
        )}
        
        <View style={styles.actionContainer}>
          {actionButtonContext}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.surface_container_lowest, // Pure white interactive card
    borderRadius: 16, // Use generous radii
    padding: 16,
    marginBottom: 16,
    // "No Line Rule" - Depth achieved through color and soft shadow, not borders
    shadowColor: Colors.light.on_surface,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: Fonts.serif, // Noto Serif
    fontSize: 20,
    color: Colors.light.on_surface,
    marginBottom: 8,
  },
  description: {
    fontFamily: Fonts.sans,
    fontSize: 14,
    color: Colors.light.textSecondary,
    marginBottom: 12,
    lineHeight: 22,
  },
  price: {
    fontFamily: Fonts.sans,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.light.primary,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  actionContainer: {
    marginTop: 12,
    alignItems: 'flex-start',
  }
});
