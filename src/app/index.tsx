import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ActionButton } from '../components/ActionButton';
import { Colors, Fonts } from '../constants/theme';
import { GlassOverlay } from '../components/GlassOverlay';

const { width } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.imageContainer}>
        {/* Placeholder image representation matching the organic brutalism style */}
        <View style={styles.heroBackground} />
        
        <View style={styles.contentContainer}>
          <Text style={styles.heroTitle}>A taste of {"\n"}the Mediterranean</Text>
          
          <GlassOverlay style={styles.glassCard}>
            <Text style={styles.subtitle}>
              Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, 
              focused on traditional recipes served with a modern twist.
            </Text>
            
            <View style={styles.buttonRow}>
              <ActionButton 
                title="Book a Table" 
                onPress={() => router.push('/book')} 
                style={styles.actionBtn}
              />
              <ActionButton 
                title="View Menu" 
                variant="secondary" 
                onPress={() => router.push('/menu')} 
                style={styles.actionBtn}
              />
            </View>
          </GlassOverlay>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    minHeight: 800,
  },
  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.light.primary,
    borderBottomLeftRadius: 60, // Intentional asymmetry
  },
  contentContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
  },
  heroTitle: {
    fontFamily: Fonts.serif,
    fontSize: 48,
    color: '#fed723', // Bright Lemon color for the hero text
    marginBottom: 40,
    lineHeight: 56,
  },
  glassCard: {
    marginTop: 40,
  },
  subtitle: {
    fontFamily: Fonts.sans,
    fontSize: 16,
    color: Colors.light.on_surface,
    lineHeight: 24,
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: 'column',
    gap: 16,
  },
  actionBtn: {
    width: '100%',
  }
});
