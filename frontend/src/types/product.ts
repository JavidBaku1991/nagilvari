export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'paintings' | 'sculptures' | 'digital-art' | 'photography' | 'ceramics';
  imageUrl: string;
  featured: boolean;
  artist: string;
  dimensions?: string;
  year: number;
  images?: string[];
} 