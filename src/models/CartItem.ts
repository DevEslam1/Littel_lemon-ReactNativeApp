import { MenuItem } from './MenuItem';

export interface CartItem {
  id: string; // Unique ID for the cart entry (could be item.id + variants)
  item: MenuItem;
  quantity: number;
}
