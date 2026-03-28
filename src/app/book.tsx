import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useReservationViewModel } from '../viewmodels/useReservationViewModel';
import { ActionButton } from '../components/ActionButton';
import { Colors, Fonts } from '../constants/theme';

export default function BookTableScreen() {
  const router = useRouter();
  const { bookTable, isSubmitting, error, success, resetForm } = useReservationViewModel();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('2');
  const [customerName, setCustomerName] = useState('');

  const handleBook = async () => {
    const size = parseInt(partySize, 10);
    await bookTable({
      date,
      time,
      partySize: isNaN(size) ? 0 : size,
      customerName
    });
  };

  if (success) {
    return (
      <View style={styles.successContainer}>
        <Text style={styles.successTitle}>Table Reserved!</Text>
        <Text style={styles.successBody}>We look forward to serving you, {customerName}.</Text>
        <ActionButton 
          title="Return to Home" 
          onPress={() => {
            resetForm();
            router.push('/');
          }} 
          style={styles.successBtn}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Reserve a Table</Text>
      <Text style={styles.headerSubtitle}>Experience the authentic taste of the Mediterranean.</Text>

      {error ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput 
          style={styles.input} 
          placeholder="First & Last Name"
          placeholderTextColor={Colors.light.textSecondary}
          value={customerName}
          onChangeText={setCustomerName}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Date</Text>
        <TextInput 
          style={styles.input} 
          placeholder="MM/DD/YYYY"
          placeholderTextColor={Colors.light.textSecondary}
          value={date}
          onChangeText={setDate}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Time</Text>
        <TextInput 
          style={styles.input} 
          placeholder="HH:MM"
          placeholderTextColor={Colors.light.textSecondary}
          value={time}
          onChangeText={setTime}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Number of Diners</Text>
        <TextInput 
          style={styles.input} 
          placeholder="2"
          keyboardType="number-pad"
          placeholderTextColor={Colors.light.textSecondary}
          value={partySize}
          onChangeText={setPartySize}
        />
      </View>

      <ActionButton 
        title={isSubmitting ? "Processing..." : "Confirm Reservation"} 
        onPress={handleBook}
        style={styles.submitBtn}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    padding: 24,
    paddingBottom: 60,
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
    marginBottom: 40,
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontFamily: Fonts.sans,
    fontSize: 14,
    color: Colors.light.textSecondary,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    fontFamily: Fonts.sans,
    fontSize: 16,
    color: Colors.light.on_surface,
    backgroundColor: Colors.light.surface_container_highest,
    borderRadius: 8,
    padding: 16,
    // "Ghost Border" active state logic would go here, simplified for now
  },
  submitBtn: {
    marginTop: 24,
    paddingVertical: 18,
  },
  errorBox: {
    backgroundColor: Colors.light.error_container,
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  errorText: {
    color: Colors.light.on_error_container,
    fontFamily: Fonts.sans,
    fontSize: 14,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.surface_container_lowest,
    padding: 24,
  },
  successTitle: {
    fontFamily: Fonts.serif,
    fontSize: 36,
    color: Colors.light.primary,
    marginBottom: 16,
  },
  successBody: {
    fontFamily: Fonts.sans,
    fontSize: 16,
    color: Colors.light.on_surface_variant,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  successBtn: {
    width: '100%',
  }
});
