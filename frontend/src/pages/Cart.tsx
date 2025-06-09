import React from 'react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  // Dummy cart data - replace with actual cart state management later
  const cartItems = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      quantity: 2,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '2',
      name: 'Product 2',
      price: 150,
      quantity: 1,
      image: 'https://via.placeholder.com/150'
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{ padding: '2rem', backgroundColor: 'white', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          color: '#8B4513',
          marginBottom: '2rem'
        }}>
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <h2 style={{ color: '#666', marginBottom: '1rem' }}>Your cart is empty</h2>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              Browse our products and add items to your cart
            </p>
            <Link 
              to="/products" 
              style={{
                display: 'inline-block',
                padding: '0.8rem 2rem',
                backgroundColor: '#8B4513',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'background-color 0.3s'
              }}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {cartItems.map(item => (
                <div key={item.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr auto',
                  gap: '1rem',
                  padding: '1rem',
                  border: '1px solid #eee',
                  borderRadius: '4px',
                  alignItems: 'center'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }}
                  />
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{item.name}</h3>
                    <p style={{ margin: '0', color: '#666' }}>${item.price}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      Quantity: {item.quantity}
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#8B4513' }}>
                      ${item.price * item.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              borderTop: '1px solid #eee'
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Total: ${total}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link 
                  to="/products"
                  style={{
                    padding: '0.8rem 2rem',
                    backgroundColor: 'white',
                    color: '#8B4513',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    border: '1px solid #8B4513',
                    transition: 'all 0.3s'
                  }}
                >
                  Continue Shopping
                </Link>
                <button
                  style={{
                    padding: '0.8rem 2rem',
                    backgroundColor: '#8B4513',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 