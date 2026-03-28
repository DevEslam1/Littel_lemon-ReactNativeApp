import { useState, useEffect } from 'react';
import { MenuItem } from '../models/MenuItem';

const MOCK_MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: 12.99,
    tags: ['Vegetarian']
  },
  {
    id: '2',
    name: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: 5.99,
    tags: ['Vegan']
  },
  {
    id: '3',
    name: 'Lemon Dessert',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: 5.00,
    tags: ["Chef's Choice"]
  }
];

export function useMenuViewModel() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const timeout = setTimeout(() => {
      setItems(MOCK_MENU);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return {
    items,
    loading
  };
}
