import React, { useState, useEffect, useRef } from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import footerImg from '../images/footer.jpg';
import heroImg from '../images/hero5.jpg';
import hero1Img from '../images/hero1.jpg';
import hero2Img from '../images/hero2.png';
import image from '../images/hero.jpeg';

const heroImages = [
  { src: heroImg, alt: 'Hero Image 1' },
  { src: hero1Img, alt: 'Hero Image 2' },
  { src: hero2Img, alt: 'Hero Image 3' },
  { src: footerImg, alt: 'Hero Image 4' }
];

const categories = [
  {
    title: 'Paintings',
    description: 'Explore our collection of unique paintings from talented artists around the world.',
    images: [
      { src: heroImg, alt: 'Painting 1' },
      { src: hero1Img, alt: 'Painting 2' },
      { src: hero2Img, alt: 'Painting 3' },
      { src: footerImg, alt: 'Painting 4' }
    ],
    path: '/products/paintings'
  },
  {
    title: 'Sculptures',
    description: 'Discover our collection of unique sculptures from talented artists.',
    images: [
      { src: hero1Img, alt: 'Sculpture 1' },
      { src: hero2Img, alt: 'Sculpture 2' },
      { src: footerImg, alt: 'Sculpture 3' },
      { src: heroImg, alt: 'Sculpture 4' }
    ],
    path: '/products/sculptures'
  },
  {
    title: 'Digital Art',
    description: 'Explore the world of digital creativity with our collection of digital artworks.',
    images: [
      { src: hero2Img, alt: 'Digital Art 1' },
      { src: footerImg, alt: 'Digital Art 2' },
      { src: heroImg, alt: 'Digital Art 3' },
      { src: hero1Img, alt: 'Digital Art 4' }
    ],
    path: '/products/digital-art'
  },
  {
    title: 'Photography',
    description: 'Browse through our collection of stunning photographs from professional photographers.',
    images: [
      { src: footerImg, alt: 'Photography 1' },
      { src: heroImg, alt: 'Photography 2' },
      { src: hero1Img, alt: 'Photography 3' },
      { src: hero2Img, alt: 'Photography 4' }
    ],
    path: '/products/photography'
  },
  {
    title: 'Ceramics',
    description: 'Explore our collection of handcrafted ceramic pieces from skilled artisans.',
    images: [
      { src: heroImg, alt: 'Ceramics 1' },
      { src: hero1Img, alt: 'Ceramics 2' },
      { src: hero2Img, alt: 'Ceramics 3' },
      { src: footerImg, alt: 'Ceramics 4' }
    ],
    path: '/products/ceramics'
  }
];

const dummyProducts = Array.from({ length: 10 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `Product ${i + 1}`,
  price: (i + 1) * 10,
  description: `This is the description for product ${i + 1}.`,
  image: image,
  category: categories[i % categories.length].title
}));

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    const categoriesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCategoriesVisible(true);
          categoriesObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (featuredRef.current) {
      observer.observe(featuredRef.current);
    }

    if (categoriesRef.current) {
      categoriesObserver.observe(categoriesRef.current);
    }

    return () => {
      if (featuredRef.current) {
        observer.unobserve(featuredRef.current);
      }
      if (categoriesRef.current) {
        categoriesObserver.unobserve(categoriesRef.current);
      }
    };
  }, []);

  return (
    <div>
      <section style={{
        height: '100vh',
        backgroundImage: '#B36B35',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div className='hero-image ' style={{
          position: 'absolute',
          width: '50%',
          height: '35%',
          bottom: '35%',
          left: '63%',
          transform: 'translate(-50%, -50%)',
        }}>
          <img src={heroImg} alt="Hero Image" />
        </div>
        <div style={{
  position: 'relative',
  zIndex: 2,
  height: '60%',
  right: '20%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  background: 'rgba(255, 255, 255, 0.25)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(8.5px)',
  WebkitBackdropFilter: 'blur(8.5px)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.18)'
}}>

          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1rem',
            color: '#8B4513',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            Welcome to Nagilvari
          </h1>
          <p style={{ 
            fontSize: '1.5rem',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            color: '#8B4513',
          }}>
            Discover and share amazing products
          </p>
        </div>
      </section>
      <div 
        ref={categoriesRef}
        style={{ 
          padding: '4rem 2rem',
          opacity: isCategoriesVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
          backgroundColor: 'white',
          position: 'relative'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
            position: 'relative'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              color: '#8B4513',
              marginBottom: '1rem',
              fontWeight: '600',
              position: 'relative',
              display: 'inline-block'
            }}>
              Browse Categories
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                backgroundColor: '#8B4513',
                borderRadius: '2px'
              }} />
            </h3>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '1rem auto 0',
              lineHeight: '1.6'
            }}>
              Explore our diverse collection of art and crafts across different categories
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            padding: '0 1rem'
          }}>
            {categories.map((category, index) => (
              <div
                key={category.path}
                style={{
                  transform: isCategoriesVisible ? 'translateY(0)' : 'translateY(40px)',
                  opacity: isCategoriesVisible ? 1 : 0,
                  transition: `transform 0.5s ease-out ${index * 0.3}s, opacity 0.5s ease-out ${index * 0.3}s`
                }}
              >
                <CategoryCard
                  title={category.title}
                  description={category.description}
                  images={category.images}
                  path={category.path}
                  variant="products"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div 
        ref={featuredRef}
        className="home-products-slider" 
        style={{ 
          padding: '4rem 2rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
          background: 'linear-gradient(to bottom, #fff5eb, #fff)',
          position: 'relative'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
            position: 'relative'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              color: '#8B4513',
              marginBottom: '1rem',
              fontWeight: '600',
              position: 'relative',
              display: 'inline-block'
            }}>
              Featured Products
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                backgroundColor: '#8B4513',
                borderRadius: '2px'
              }} />
            </h3>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '1rem auto 0',
              lineHeight: '1.6'
            }}>
              Explore our carefully curated collection of unique and exceptional products
            </p>
          </div>
          <Splide
            options={{
              type: 'loop',
              perPage: 4,
              gap: '2rem',
              autoplay: true,
              pauseOnHover: true,
              arrows: true,
              pagination: false,
              breakpoints: {
                1200: {
                  perPage: 3,
                  gap: '1.5rem'
                },
                768: {
                  perPage: 2,
                  gap: '1rem'
                },
                640: {
                  perPage: 1,
                  gap: '1rem'
                },
              },
            }}
            aria-label="Featured Products"
          >
            {dummyProducts.map((product, index) => (
              <SplideSlide key={product.id}>
                <div style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 0.5s ease-out ${index * 0.3}s, opacity 0.5s ease-out ${index * 0.3}s`,
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <ProductCard {...product} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Home; 