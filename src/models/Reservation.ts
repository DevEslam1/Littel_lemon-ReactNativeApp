export interface Reservation {
  id: string;
  date: string; // ISO string ideally
  time: string; // HH:mm format
  partySize: number;
  specialRequests?: string;
  customerName?: string;
  customerEmail?: string;
}
