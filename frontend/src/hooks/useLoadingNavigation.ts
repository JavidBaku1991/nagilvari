import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';

export const useLoadingNavigation = () => {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    console.log('Location changed, starting loading...');
    startLoading();
    
    // Force stop loading after 1 second
    const timer = setTimeout(() => {
      console.log('Stopping loading...');
      stopLoading();
    }, 1000);

    return () => {
      console.log('Cleaning up loading...');
      clearTimeout(timer);
      stopLoading();
    };
  }, [location.pathname]);
}; 