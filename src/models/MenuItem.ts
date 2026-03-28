export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: string[]; // e.g., ["Gluten-Free", "Chef's Choice"]
  imageUrl?: string;
}
