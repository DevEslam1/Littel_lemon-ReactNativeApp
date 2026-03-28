import { Stack } from 'expo-router';
import { CartProvider } from '../viewmodels/useCartViewModel';
import { Colors } from '../constants/theme';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <CartProvider>
      <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.light.surface,
            },
            headerTintColor: Colors.light.primary,
            headerTitleStyle: {
              fontFamily: 'Noto Serif',
              fontWeight: '600',
            },
            contentStyle: {
              backgroundColor: Colors.light.background,
            }
          }}
        >
          <Stack.Screen 
            name="index" 
            options={{ title: 'Little Lemon', headerShown: false }} 
          />
          <Stack.Screen 
            name="menu" 
            options={{ title: 'Our Menu' }} 
          />
          <Stack.Screen 
            name="cart" 
            options={{ title: 'Your Cart' }} 
          />
          <Stack.Screen 
            name="book" 
            options={{ title: 'Book a Table', presentation: 'modal' }} 
          />
        </Stack>
      </View>
    </CartProvider>
  );
}
