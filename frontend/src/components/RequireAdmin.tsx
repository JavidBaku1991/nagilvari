import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setLoading(false);
      setValid(false);
      return;
    }
    fetch('http://localhost:4000/admin/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then(res => res.json())
      .then(data => {
        setValid(data.valid);
        setLoading(false);
      })
      .catch(() => {
        setValid(false);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!valid) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
};

export default RequireAdmin; 