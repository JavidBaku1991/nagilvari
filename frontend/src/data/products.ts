import heroImg from '../images/hero.jpeg';
import hero1Img from '../images/hero1.jpg';
import hero5Img from '../images/hero5.jpg';
import hero6Img from '../images/hero6.jpg';
import hero9Img from '../images/hero9.jpg';
import hero10Img from '../images/hero10.jpg';
import hero11Img from '../images/hero11.jpg';

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
}

export const products: Product[] = [
  // Paintings
  {
    id: 'p1',
    title: 'Whispers of the Ocean',
    description: 'A mesmerizing oil painting capturing the dynamic movement of ocean waves at sunset. The artist masterfully blends warm and cool tones to create a sense of depth and tranquility.',
    price: 2500,
    category: 'paintings',
    imageUrl: heroImg,
    featured: true,
    artist: 'Sarah Chen',
    dimensions: '36" x 48"',
    year: 2023
  },
  {
    id: 'p2',
    title: 'Urban Dreams',
    description: 'An abstract cityscape that transforms the chaos of urban life into a harmonious composition of geometric shapes and vibrant colors.',
    price: 1800,
    category: 'paintings',
    imageUrl: hero1Img,
    featured: false,
    artist: 'Michael Rodriguez',
    dimensions: '40" x 60"',
    year: 2022
  },
  {
    id: 'p3',
    title: 'Mountain Serenity',
    description: 'A breathtaking landscape painting that captures the majesty of snow-capped mountains at dawn, with delicate brushstrokes creating a sense of ethereal light.',
    price: 3200,
    category: 'paintings',
    imageUrl: hero5Img,
    featured: true,
    artist: 'Emma Thompson',
    dimensions: '48" x 36"',
    year: 2023
  },
  {
    id: 'p4',
    title: 'Floral Symphony',
    description: 'A vibrant still life featuring an arrangement of exotic flowers, painted with meticulous attention to detail and rich, saturated colors.',
    price: 1500,
    category: 'paintings',
    imageUrl: hero6Img,
    featured: false,
    artist: 'James Wilson',
    dimensions: '24" x 30"',
    year: 2022
  },
  {
    id: 'p5',
    title: 'Cosmic Dance',
    description: 'An abstract interpretation of the cosmos, featuring swirling galaxies and nebulae in a mesmerizing dance of colors and light.',
    price: 2800,
    category: 'paintings',
    imageUrl: hero9Img,
    featured: true,
    artist: 'Lisa Chang',
    dimensions: '42" x 42"',
    year: 2023
  },
  {
    id: 'p6',
    title: 'Autumn Reflections',
    description: 'A contemplative landscape capturing the golden hues of autumn reflected in a still lake, creating a mirror-like effect of nature\'s beauty.',
    price: 2200,
    category: 'paintings',
    imageUrl: hero10Img,
    featured: false,
    artist: 'David Park',
    dimensions: '36" x 48"',
    year: 2022
  },

  // Sculptures
  {
    id: 's1',
    title: 'Eternal Embrace',
    description: 'A bronze sculpture depicting two figures in a timeless embrace, capturing the essence of human connection and emotion.',
    price: 4500,
    category: 'sculptures',
    imageUrl: hero11Img,
    featured: true,
    artist: 'Maria Garcia',
    dimensions: '24" x 18" x 12"',
    year: 2023
  },
  {
    id: 's2',
    title: 'Dancing Wind',
    description: 'A kinetic sculpture that gracefully moves with the wind, creating ever-changing patterns and shadows.',
    price: 3800,
    category: 'sculptures',
    imageUrl: heroImg,
    featured: false,
    artist: 'Robert Chen',
    dimensions: '36" x 24" x 24"',
    year: 2022
  },
  {
    id: 's3',
    title: 'Ancient Wisdom',
    description: 'A marble sculpture inspired by classical forms, representing the timeless pursuit of knowledge and wisdom.',
    price: 5200,
    category: 'sculptures',
    imageUrl: hero1Img,
    featured: true,
    artist: 'Sophia Martinez',
    dimensions: '30" x 20" x 20"',
    year: 2023
  },
  {
    id: 's4',
    title: 'Modern Flow',
    description: 'A contemporary abstract sculpture exploring the relationship between space and form through fluid, organic shapes.',
    price: 3500,
    category: 'sculptures',
    imageUrl: hero5Img,
    featured: false,
    artist: 'Thomas Wright',
    dimensions: '28" x 22" x 18"',
    year: 2022
  },
  {
    id: 's5',
    title: 'Nature\'s Balance',
    description: 'A delicate sculpture that combines natural elements with geometric forms, symbolizing the harmony between nature and human creation.',
    price: 4200,
    category: 'sculptures',
    imageUrl: hero6Img,
    featured: true,
    artist: 'Elena Popov',
    dimensions: '32" x 24" x 16"',
    year: 2023
  },
  {
    id: 's6',
    title: 'Urban Rhythm',
    description: 'A dynamic sculpture that captures the energy and movement of city life through abstract forms and industrial materials.',
    price: 3800,
    category: 'sculptures',
    imageUrl: hero9Img,
    featured: false,
    artist: 'Daniel Kim',
    dimensions: '26" x 20" x 20"',
    year: 2022
  },

  // Digital Art
  {
    id: 'd1',
    title: 'Digital Dreams',
    description: 'A surreal digital artwork that blends reality with fantasy, creating a dreamlike landscape of impossible architecture.',
    price: 1200,
    category: 'digital-art',
    imageUrl: hero10Img,
    featured: true,
    artist: 'Alex Rivera',
    year: 2023
  },
  {
    id: 'd2',
    title: 'Pixel Poetry',
    description: 'An experimental digital piece that explores the intersection of traditional art and modern technology through pixel art techniques.',
    price: 950,
    category: 'digital-art',
    imageUrl: hero11Img,
    featured: false,
    artist: 'Maya Patel',
    year: 2022
  },
  {
    id: 'd3',
    title: 'Virtual Visions',
    description: 'A futuristic digital artwork that imagines the possibilities of virtual reality and artificial intelligence in art creation.',
    price: 1500,
    category: 'digital-art',
    imageUrl: heroImg,
    featured: true,
    artist: 'Chris Zhang',
    year: 2023
  },
  {
    id: 'd4',
    title: 'Digital Harmony',
    description: 'A mesmerizing digital composition that combines mathematical patterns with organic forms to create visual harmony.',
    price: 1100,
    category: 'digital-art',
    imageUrl: hero1Img,
    featured: false,
    artist: 'Sarah Lee',
    year: 2022
  },
  {
    id: 'd5',
    title: 'Cyber Dreams',
    description: 'An innovative digital artwork that explores the relationship between humans and technology in the digital age.',
    price: 1300,
    category: 'digital-art',
    imageUrl: hero5Img,
    featured: true,
    artist: 'Ryan Chen',
    year: 2023
  },
  {
    id: 'd6',
    title: 'Digital Evolution',
    description: 'A thought-provoking digital piece that visualizes the evolution of art in the digital era through dynamic compositions.',
    price: 1000,
    category: 'digital-art',
    imageUrl: hero6Img,
    featured: false,
    artist: 'Emma Wilson',
    year: 2022
  },

  // Photography
  {
    id: 'ph1',
    title: 'Urban Solitude',
    description: 'A striking black and white photograph capturing the quiet moments of solitude in the midst of urban chaos.',
    price: 800,
    category: 'photography',
    imageUrl: hero9Img,
    featured: true,
    artist: 'John Smith',
    year: 2023
  },
  {
    id: 'ph2',
    title: 'Nature\'s Palette',
    description: 'A vibrant landscape photograph showcasing the rich colors of nature during the golden hour.',
    price: 950,
    category: 'photography',
    imageUrl: hero10Img,
    featured: false,
    artist: 'Anna Brown',
    year: 2022
  },
  {
    id: 'ph3',
    title: 'Human Connection',
    description: 'A powerful documentary photograph capturing authentic moments of human connection and emotion.',
    price: 1200,
    category: 'photography',
    imageUrl: hero11Img,
    featured: true,
    artist: 'David Miller',
    year: 2023
  },
  {
    id: 'ph4',
    title: 'Architectural Poetry',
    description: 'A series of architectural photographs that transform buildings into abstract geometric compositions.',
    price: 850,
    category: 'photography',
    imageUrl: heroImg,
    featured: false,
    artist: 'Lisa Chen',
    year: 2022
  },
  {
    id: 'ph5',
    title: 'Wildlife Moments',
    description: 'An intimate wildlife photograph capturing rare and precious moments in the animal kingdom.',
    price: 1100,
    category: 'photography',
    imageUrl: hero1Img,
    featured: true,
    artist: 'Mark Wilson',
    year: 2023
  },
  {
    id: 'ph6',
    title: 'Street Stories',
    description: 'A compelling street photography series that tells stories of everyday life in urban environments.',
    price: 900,
    category: 'photography',
    imageUrl: hero5Img,
    featured: false,
    artist: 'Sophia Lee',
    year: 2022
  },

  // Ceramics
  {
    id: 'c1',
    title: 'Earth\'s Embrace',
    description: 'A handcrafted ceramic vessel that celebrates the natural beauty of clay and traditional pottery techniques.',
    price: 450,
    category: 'ceramics',
    imageUrl: hero6Img,
    featured: true,
    artist: 'Maria Garcia',
    dimensions: '12" x 8"',
    year: 2023
  },
  {
    id: 'c2',
    title: 'Modern Vessel',
    description: 'A contemporary ceramic piece that combines traditional craftsmanship with modern design elements.',
    price: 380,
    category: 'ceramics',
    imageUrl: hero9Img,
    featured: false,
    artist: 'James Wilson',
    dimensions: '10" x 6"',
    year: 2022
  },
  {
    id: 'c3',
    title: 'Ceramic Dreams',
    description: 'An innovative ceramic sculpture that pushes the boundaries of traditional pottery forms.',
    price: 520,
    category: 'ceramics',
    imageUrl: hero10Img,
    featured: true,
    artist: 'Emma Thompson',
    dimensions: '14" x 10"',
    year: 2023
  },
  {
    id: 'c4',
    title: 'Ancient Echoes',
    description: 'A ceramic piece inspired by ancient pottery traditions, featuring traditional patterns and glazing techniques.',
    price: 350,
    category: 'ceramics',
    imageUrl: hero11Img,
    featured: false,
    artist: 'David Park',
    dimensions: '8" x 8"',
    year: 2022
  },
  {
    id: 'c5',
    title: 'Nature\'s Form',
    description: 'A ceramic vessel that mimics organic forms found in nature, with a unique glazing technique.',
    price: 420,
    category: 'ceramics',
    imageUrl: heroImg,
    featured: true,
    artist: 'Sarah Chen',
    dimensions: '11" x 7"',
    year: 2023
  },
  {
    id: 'c6',
    title: 'Urban Ceramics',
    description: 'A modern ceramic piece that reflects urban aesthetics through its form and surface treatment.',
    price: 380,
    category: 'ceramics',
    imageUrl: hero1Img,
    featured: false,
    artist: 'Michael Rodriguez',
    dimensions: '9" x 9"',
    year: 2022
  }
];

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
}; 