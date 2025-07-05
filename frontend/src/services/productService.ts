import { Product } from '../types/product';
import i18next from 'i18next';

// Import all images
import heroImg from '../images/hero.jpeg';
import hero1Img from '../images/hero1.jpg';
import hero2Img from '../images/hero2.png';
import hero5Img from '../images/hero5.jpg';
import hero6Img from '../images/hero6.jpg';
import hero8Img from '../images/hero8.webp';
import hero9Img from '../images/hero9.jpg';
import hero10Img from '../images/hero10.jpg';
import hero11Img from '../images/hero11.jpg';
import hero12Img from '../images/hero12.jpg';
import hero13Img from '../images/hero13.png';
import hero14Img from '../images/hero14.png';
import footerImg from '../images/footer.jpg';
import potteryImg from '../images/pottery.png';
import contactImg from '../images/contact.jpg';
import faqImg from '../images/faq.jpg';
import selinImg from '../images/selin.jpg';

// Array of all available images
const productImages = [
  heroImg,
  hero1Img,
  hero2Img,
  hero5Img,
  hero6Img,
  hero8Img,
  hero9Img,
  hero10Img,
  hero11Img,
  hero12Img,
  hero13Img,
  hero14Img,
  footerImg,
  potteryImg,
  contactImg,
  faqImg,
  selinImg
];

// Function to get a random image
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * productImages.length);
  return productImages[randomIndex];
};

// Function to get random images
const getRandomImages = (count: number) => {
  const shuffled = [...productImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Mock data for products
const generateProducts = (): Product[] => {
  const products: Product[] = [];
  const categories: Product['category'][] = ['paintings', 'sculptures', 'digital-art', 'photography', 'ceramics'];
  
  for (let i = 1; i <= 10; i++) {
    const mainImage = getRandomImage();
    const additionalImages = getRandomImages(3).filter(img => img !== mainImage);
    
    products.push({
      id: i.toString(),
      title: i18next.t(`products.items.${i}.name`),
      price: Math.floor(Math.random() * 1000) + 100,
      description: i18next.t(`products.items.${i}.description`),
      imageUrl: mainImage,
      images: [mainImage, ...additionalImages],
      category: categories[Math.floor(Math.random() * categories.length)],
      featured: Math.random() > 0.5,
      artist: `Artist ${i}`,
      year: 2023
    });
  }
  return products;
};

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

// Real API calls
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/api/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    
    // Transform backend data to match frontend Product interface
    return products.map((product: any) => ({
      id: product._id,
      title: product.name,
      description: product.description,
      price: product.price,
      category: product.category || 'paintings',
      imageUrl: product.imageUrl ? `${API_URL}${product.imageUrl}` : '',
      featured: product.featured || false,
      artist: product.artist || '',
      dimensions: product.dimensions || '',
      year: product.year || 2023,
      images: product.imageUrl ? [`${API_URL}${product.imageUrl}`] : []
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/api/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    
    // Transform backend data to match frontend Product interface
    const transformedProducts = products.map((product: any) => ({
      id: product._id,
      title: product.name,
      description: product.description,
      price: product.price,
      category: product.category || 'paintings',
      imageUrl: product.imageUrl ? `${API_URL}${product.imageUrl}` : '',
      featured: product.featured || false,
      artist: product.artist || '',
      dimensions: product.dimensions || '',
      year: product.year || 2023,
      images: product.imageUrl ? [`${API_URL}${product.imageUrl}`] : []
    }));
    
    // Filter by category
    return transformedProducts.filter((product: Product) => product.category === category);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/api/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    
    // Transform backend data to match frontend Product interface
    const transformedProducts = products.map((product: any) => ({
      id: product._id,
      title: product.name,
      description: product.description,
      price: product.price,
      category: product.category || 'paintings',
      imageUrl: product.imageUrl ? `${API_URL}${product.imageUrl}` : '',
      featured: product.featured || false,
      artist: product.artist || '',
      dimensions: product.dimensions || '',
      year: product.year || 2023,
      images: product.imageUrl ? [`${API_URL}${product.imageUrl}`] : []
    }));
    
    // Return featured products or first 6 if no featured products
    const featuredProducts = transformedProducts.filter((product: Product) => product.featured);
    return featuredProducts.length > 0 ? featuredProducts : transformedProducts.slice(0, 6);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
}; 