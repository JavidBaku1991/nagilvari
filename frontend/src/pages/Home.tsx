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
import { Box, Container, Typography } from '@mui/material';
import categoriesImg from '../images/categories.jpg';

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
      paddingTop: '100px',
      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      paddingBottom: '20px',
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
        <Box
          sx={{
            height: { xs: '50vh', sm: '60vh', md: '70vh', lg: '80vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: `url(${bghero})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: { xs: '8px', sm: '12px', md: '16px', lg: '20px' },
            margin: { xs: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' },
            minHeight: { xs: '300px', sm: '400px' },
          }}
          className='hero-section'
        >
          <Box
            className="hero-text"
            sx={{
              position: 'absolute',
              top: { xs: '5%', sm: '10%', md: '15%', lg: '20%' },
              left: { xs: '2%', sm: '5%', md: '8%', lg: '10%' },
              right: { xs: '2%', sm: '5%', md: '15%', lg: '20%' },
              padding: { xs: '0.75rem', sm: '1rem', md: '1.5rem', lg: '2rem' },
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(9.5px)',
              WebkitBackdropFilter: 'blur(8.5px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              transform: heroLoaded ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 2s ease-in-out',
              height: { xs: '60%', sm: '55%', md: '50%', lg: '40%' },
              width: { xs: '86%', sm: '70%', md: '70%', lg: '60%' },
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              zIndex: 1000,
              borderRadius: { xs: '8px', sm: '12px', md: '16px', lg: '20px' },
              minHeight: { xs: '180px', sm: '200px' },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
                marginBottom: { xs: '0.25rem', sm: '0.5rem', md: '0.75rem', lg: '1rem' },
                color: 'var(--secondary-main)',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                transform: heroLoaded ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 2s ease-in-out',
                transitionDelay: '1s',
                opacity: heroLoaded ? 1 : 0,
                fontWeight: 'bold',
                lineHeight: { xs: 1.1, sm: 1.2, md: 1.3, lg: 1.4 },
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              {t('home.welcome')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.2rem', lg: '1.3rem', xl: '1.5rem' },
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                color: 'var(--secondary-main)',
                transform: heroLoaded ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 2s ease-in-out',
                transitionDelay: '1.5s',
                opacity: heroLoaded ? 1 : 0,
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4, lg: 1.5 },
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              {t('home.discover')}
            </Typography>
          </Box>

          <Box
            className="hero-image"
            sx={{
              position: 'absolute',
              width: { xs: '90%', sm: '85%', md: '80%', lg: '70%' },
              height: { xs: '50%', sm: '60%', md: '70%', lg: '75%' },
              bottom: { xs: '2%', sm: '5%', md: '8%', lg: '10%' },
              left: { xs: '5%', sm: '7.5%', md: '10%', lg: '23%' },
              transform: heroLoaded ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 2s ease-out',
              background: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 32px 0 rgba(246, 246, 246, 0.37)',
              backdropFilter: 'blur(9.5px)',
              WebkitBackdropFilter: 'blur(8.5px)',
              borderRadius: { xs: '8px', sm: '12px', md: '16px', lg: '30px' },
              display: { xs: 'none', sm: 'block' }, // Hide on very small screens
              minHeight: { sm: '200px', md: '250px' },
            }}
          >
            <img 
              src={heroImg} 
              alt="Hero" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: 'inherit' 
              }} 
            />
          </Box>
        </Box>

        {/* INVESTOR CALL TO ACTION */}
        <InvestorCallToAction />

        {/* FEATURED PRODUCTS */}
        <div ref={featuredRef}>
          <FeaturedProducts />
        </div>

        {/* CATEGORIES */}
        <Box
          ref={categoriesRef}
          sx={{
            padding: { xs: '1rem', sm: '1.5rem', md: '2rem' },
            opacity: isCategoriesVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
            borderRadius: { xs: '10px', sm: '15px', md: '20px' },
            marginTop: { xs: '1rem', sm: '1.5rem', md: '2rem' },
            backgroundImage: `url(${categoriesImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            boxShadow: '0 8px 32px 0 rgba(246, 246, 246, 0.37)',
          }}
        >
          <Box sx={{ maxWidth: '1200px', margin: '0 auto', marginBottom: { xs: '1rem', sm: '1.5rem', md: '2rem' } }}>
            <Box sx={{ textAlign: 'center', marginBottom: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  color: 'var(--secondary-main)',
                  marginBottom: { xs: '0.5rem', sm: '0.75rem', md: '1rem' },
                  fontWeight: 600,
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                {t('home.browseCategories')}
                <Box sx={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: { xs: '40px', sm: '50px', md: '60px' },
                  height: '3px',
                  backgroundColor: 'var(--secondary-main)',
                  borderRadius: '2px'
                }} />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--secondary-main)',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  maxWidth: { xs: '100%', sm: '500px', md: '600px' },
                  margin: { xs: '0.5rem auto 0', sm: '0.75rem auto 0', md: '1rem auto 0' },
                  lineHeight: 1.6
                }}
              >
                {t('home.categoriesDescription')}
              </Typography>
            </Box>

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(3, 1fr)' 
              },
              gap: { xs: '1rem', sm: '1.5rem', md: '2rem' }
            }}>
              {categories.map((category, index) => (
                <Box
                  key={category.path}
                  sx={{
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
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
