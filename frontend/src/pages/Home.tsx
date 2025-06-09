import React, { useState, useEffect, useRef } from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductCard from '../components/ProductCard';
import footerImg from '../images/footer.jpg';
import heroImg from '../images/hero.jpeg';
import hero1Img from '../images/hero1.jpg';
import hero2Img from '../images/hero2.png';
import image from '../images/hero.jpeg';

const heroImages = [
  { src: heroImg, alt: 'Hero Image 1' },
  { src: hero1Img, alt: 'Hero Image 2' },
  { src: hero2Img, alt: 'Hero Image 3' },
  { src: footerImg, alt: 'Hero Image 4' }
];

const dummyProducts = Array.from({ length: 10 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `Product ${i + 1}`,
  price: (i + 1) * 10,
  description: `This is the description for product ${i + 1}.`,
  image: image,
  rating: Math.random() * 5
}));

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

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

    if (featuredRef.current) {
      observer.observe(featuredRef.current);
    }

    return () => {
      clearInterval(interval);
      if (featuredRef.current) {
        observer.unobserve(featuredRef.current);
      }
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero" style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        margin: 0,
        padding: 0,
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        overflow: 'hidden'
      }}>
        {heroImages.map((image, index) => (
          <div
            key={image.alt}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 1
            }}
          />
        ))}
        <div style={{ position: 'relative', zIndex: 2 }}>
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
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            ,
            color: '#8B4513',

          }}>
            Discover and share amazing products
          </p>
        </div>
      </section>
      <div 
        ref={featuredRef}
        className="home-products-slider mt-5" 
        style={{ 
          padding: '2rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
        }}
      >
        <h3 className="mb-4 text-center">Featured Products</h3>
        <Splide
          options={{
            type: 'loop',
            perPage: 4,
            gap: '1rem',
            autoplay: true,
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              640: {
                perPage: 1,
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
                transition: `transform 0.5s ease-out ${index * 0.3}s, opacity 0.5s ease-out ${index * 0.3}s`
              }}>
                <ProductCard {...product} />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Home; 