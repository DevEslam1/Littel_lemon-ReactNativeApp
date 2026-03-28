import { useState } from 'react';
import { Reservation } from '../models/Reservation';

export function useReservationViewModel() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bookTable = async (reservation: Omit<Reservation, 'id'>) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Basic validation
      if (!reservation.date || !reservation.time || reservation.partySize < 1) {
        throw new Error('Please fill out all required fields.');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Failed to book table. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setError(null);
  };

  return {
    bookTable,
    isSubmitting,
    success,
    error,
    resetForm
  };
}
