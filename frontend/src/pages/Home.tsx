import React, { useState, useEffect, useRef } from 'react';
import '@splidejs/react-splide/css';
import { useTranslation } from 'react-i18next';
import CategoryCard from '../components/CategoryCard';
import InvestorCallToAction from '../components/InvestorCallToAction';
import FeaturedProducts from '../components/FeaturedProducts';
import footerImg from '../images/footer.jpg';
import heroImg from '../images/hero14.png';
import hero1Img from '../images/hero1.jpg';
import hero2Img from '../images/hero2.png';
import image from '../images/selin.jpg';
import bghero from '../images/hero13.png';
import { Box, Container } from '@mui/material';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      title: t('categories.paintings.title'),
      description: t('categories.paintings.description'),
      images: [heroImg, hero1Img, hero2Img, footerImg].map((src, i) => ({ src, alt: `Painting ${i + 1}` })),
      path: '/products/paintings'
    },
    {
      title: t('categories.sculptures.title'),
      description: t('categories.sculptures.description'),
      images: [hero1Img, hero2Img, footerImg, heroImg].map((src, i) => ({ src, alt: `Sculpture ${i + 1}` })),
      path: '/products/sculptures'
    },
    {
      title: t('categories.digitalArt.title'),
      description: t('categories.digitalArt.description'),
      images: [hero2Img, footerImg, heroImg, hero1Img].map((src, i) => ({ src, alt: `Digital Art ${i + 1}` })),
      path: '/products/digital-art'
    },
    {
      title: t('categories.photography.title'),
      description: t('categories.photography.description'),
      images: [footerImg, heroImg, hero1Img, hero2Img].map((src, i) => ({ src, alt: `Photography ${i + 1}` })),
      path: '/products/photography'
    },
    {
      title: t('categories.ceramics.title'),
      description: t('categories.ceramics.description'),
      images: [heroImg, hero1Img, hero2Img, footerImg].map((src, i) => ({ src, alt: `Ceramics ${i + 1}` })),
      path: '/products/ceramics'
    }
  ];

  const dummyProducts = Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
    name: `${t('common.product')} ${i + 1}`,
    price: (i + 1) * 10,
    description: `${t('common.productDescription')} ${i + 1}.`,
    image: image,
    category: categories[i % categories.length].title
  }));

  useEffect(() => {
    setTimeout(() => {
      setHeroLoaded(true);
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const categoriesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCategoriesVisible(true);
          categoriesObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (featuredRef.current) observer.observe(featuredRef.current);
    if (categoriesRef.current) categoriesObserver.observe(categoriesRef.current);

    return () => {
      if (featuredRef.current) observer.unobserve(featuredRef.current);
      if (categoriesRef.current) categoriesObserver.unobserve(categoriesRef.current);
    };
  }, []);

  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(43, 35, 35, 0.85)',
        zIndex: 0,
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* HERO SECTION */}
        <section
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: `url(${bghero})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='hero-section'
        >
          <div
            className="hero-text"
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              padding: '2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(9.5px)',
              WebkitBackdropFilter: 'blur(8.5px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              transform: heroLoaded ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 2s ease-in-out',
              right: '20%',
              height: '40%',
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              zIndex: 1000
            }}
          >
            <h1
              style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                color: '#8B4513',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                transform: heroLoaded ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 2s ease-in-out',
                transitionDelay: '1s',
                opacity: heroLoaded ? 1 : 0
              }}
            >
              {t('home.welcome')}
            </h1>
            <p
              style={{
                fontSize: '1.5rem',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                color: '#8B4513',
                transform: heroLoaded ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 2s ease-in-out',
                transitionDelay: '1.5s',
                opacity: heroLoaded ? 1 : 0
              }}
            >
              {t('home.discover')}
            </p>
          </div>

          <div
            className="hero-image"
            style={{
              position: 'absolute',
              width: '70%',
              height: '75%',
              bottom: '10%',
              left: '23%',
              transform: heroLoaded ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 2s ease-out',
              background: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 32px 0 rgba(246, 246, 246, 0.37)',
              backdropFilter: 'blur(9.5px)',
              WebkitBackdropFilter: 'blur(8.5px)',
              borderRadius: '30px',
            }}
          >
            <img src={heroImg} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} />
          </div>
        </section>

        {/* INVESTOR CALL TO ACTION */}
        <InvestorCallToAction />

        {/* FEATURED PRODUCTS */}
        <div ref={featuredRef}>
          <FeaturedProducts />
        </div>

        {/* CATEGORIES */}
        <div
          ref={categoriesRef}
          style={{
            padding: '4rem 2rem',
            opacity: isCategoriesVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
            backgroundColor: 'white'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h3 style={{
                fontSize: '2.5rem',
                color: '#8B4513',
                marginBottom: '1rem',
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block'
              }}>
                {t('home.browseCategories')}
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
                {t('home.categoriesDescription')}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              {categories.map((category, index) => (
                <div
                  key={category.path}
                  style={{
                    transform: isCategoriesVisible ? 'translateY(0)' : 'translateY(40px)',
                    opacity: isCategoriesVisible ? 1 : 0,
                    transition: `transform 0.5s ease-out ${index * 0.2}s, opacity 0.5s ease-out ${index * 0.2}s`
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
      </Container>
    </Box>
  );
};

export default Home;
