import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';

export const useLoadingNavigation = () => {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    console.log('Location changed, starting loading...');
    startLoading();
    
    // Reduce timeout to prevent navigation blocking
    const timer = setTimeout(() => {
      console.log('Stopping loading...');
      stopLoading();
    }, 500); // Reduced from 1000ms to 500ms

    return () => {
      console.log('Cleaning up loading...');
      clearTimeout(timer);
      stopLoading();
    };
  }, [location.pathname, startLoading, stopLoading]);
}; 