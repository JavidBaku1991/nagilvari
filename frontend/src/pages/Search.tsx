import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import image from '../images/hero.jpeg';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with dummy data
    const dummyProducts = Array.from({ length: 20 }, (_, i) => ({
      id: (i + 1).toString(),
      name: `Product ${i + 1}`,
      price: (i + 1) * 10,
      description: `This is the description for product ${i + 1}.`,
      image: image,
      category: ['Paintings', 'Sculptures', 'Digital Art', 'Photography', 'Ceramics'][i % 5]
    }));

    // Filter products based on search query
    const results = dummyProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    setIsLoading(false);
  }, [query]);

  return (
    <div style={{ padding: '2rem', backgroundColor: 'white', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '2rem', 
            color: '#8B4513',
            marginBottom: '1rem'
          }}>
            Search Results for "{query}"
          </h1>
          <p style={{ color: '#666' }}>
            Found {searchResults.length} results
          </p>
        </div>

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Loading...
          </div>
        ) : searchResults.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2 style={{ color: '#666', marginBottom: '1rem' }}>No results found</h2>
            <p style={{ color: '#666' }}>Try different keywords or browse our categories</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem',
            padding: '1rem 0'
          }}>
            {searchResults.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search; 