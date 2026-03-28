import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useMenuViewModel } from '../viewmodels/useMenuViewModel';
import { useCartViewModel } from '../viewmodels/useCartViewModel';
import { MenuItemCard } from '../components/MenuItemCard';
import { ActionButton } from '../components/ActionButton';
import { Colors, Fonts } from '../constants/theme';

export default function MenuScreen() {
  const router = useRouter();
  const { items, loading } = useMenuViewModel();
  const { addToCart, cart } = useCartViewModel();

  const handleAddToCart = (item: any) => {
    addToCart(item, 1);
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={Colors.light.primary} />
      </View>
    );
  }

  const itemsInCart = cart.reduce((acc, c) => acc + c.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Curated Dishes</Text>
        <Text style={styles.headerSubtitle}>Intentional ingredients, simple prep.</Text>
      </View>
      
      <FlatList
        data={items}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItemCard 
            item={item} 
            actionButtonContext={
              <ActionButton 
                title="Add to order" 
                variant="tertiary" 
                onPress={() => handleAddToCart(item)} 
              />
            }
          />
        )}
      />

      {itemsInCart > 0 && (
        <View style={styles.floatingCartContainer}>
          <ActionButton 
            title={`View Cart (${itemsInCart})`} 
            onPress={() => router.push('/cart')} 
            variant="secondary"
            style={styles.floatingButton}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.surface_container_low,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
  header: {
    padding: 24,
    paddingTop: 40,
    backgroundColor: Colors.light.surface,
  },
  headerTitle: {
    fontFamily: Fonts.serif,
    fontSize: 32,
    color: Colors.light.on_surface,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontFamily: Fonts.sans,
    fontSize: 16,
    color: Colors.light.textSecondary,
  },
  listContent: {
    padding: 24,
    paddingBottom: 100,
  },
  floatingCartContainer: {
    position: 'absolute',
    bottom: 32,
    left: 24,
    right: 24,
    // Soft drop shadow
    shadowColor: Colors.light.on_surface,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },
  floatingButton: {
    borderRadius: 30, // xl rounding
  }
});
