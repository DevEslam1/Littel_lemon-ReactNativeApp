import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui';
import React from 'react';
import { useColorScheme, View, StyleSheet, Pressable, Text } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme ?? 'light'];

  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <View style={[styles.tabBar, { backgroundColor: colors.background }]}>
          <TabTrigger name="index" href="/" asChild>
            <Pressable style={styles.tabButton}>
              <Text style={[styles.tabLabel, { color: colors.text }]}>Home</Text>
            </Pressable>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <Pressable style={styles.tabButton}>
              <Text style={[styles.tabLabel, { color: colors.textSecondary }]}>Explore</Text>
            </Pressable>
          </TabTrigger>
        </View>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
