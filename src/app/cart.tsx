import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useCartViewModel } from '../viewmodels/useCartViewModel';
import { ActionButton } from '../components/ActionButton';
import { Colors, Fonts } from '../constants/theme';

export default function CartScreen() {
  const router = useRouter();
  const { cart, removeFromCart, totalPrice, clearCart } = useCartViewModel();

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty.</Text>
        <ActionButton 
          title="See Menu" 
          onPress={() => router.push('/menu')} 
          style={styles.browseButton}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.item.name}</Text>
              <Text style={styles.itemPrice}>
                {item.quantity} x ${(item.item.price).toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity 
              onPress={() => removeFromCart(item.id)}
              style={styles.removeBtn}
            >
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>${totalPrice.toFixed(2)}</Text>
        </View>
        
        <ActionButton 
          title="Checkout" 
          variant="secondary"
          onPress={() => {
            alert('Checkout successful!');
            clearCart();
            router.push('/');
          }} 
          style={styles.checkoutBtn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.surface_container_low,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    padding: 24,
  },
  emptyText: {
    fontFamily: Fonts.serif,
    fontSize: 24,
    color: Colors.light.on_surface,
    marginBottom: 24,
  },
  browseButton: {
    width: '100%',
  },
  listContent: {
    padding: 24,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.light.surface_container_lowest,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontFamily: Fonts.serif,
    fontSize: 18,
    color: Colors.light.on_surface,
    marginBottom: 4,
  },
  itemPrice: {
    fontFamily: Fonts.sans,
    fontSize: 16,
    color: Colors.light.textSecondary,
  },
  removeBtn: {
    padding: 8,
  },
  removeText: {
    fontFamily: Fonts.sans,
    fontSize: 14,
    color: Colors.light.error,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: Colors.light.surface,
    padding: 24,
    paddingBottom: 40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: Colors.light.on_surface,
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 8,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  totalLabel: {
    fontFamily: Fonts.sans,
    fontSize: 18,
    color: Colors.light.textSecondary,
  },
  totalAmount: {
    fontFamily: Fonts.serif,
    fontSize: 28,
    color: Colors.light.primary,
  },
  checkoutBtn: {
    borderRadius: 30, // xl rounding
  }
});
