import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';

export const useLoadingNavigation = () => {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    console.log('Location changed, starting loading...');
    startLoading();
    
    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      console.log('Stopping loading...');
      stopLoading();
      timeoutRef.current = null;
    }, 300);

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      stopLoading();
    };
  }, [location.pathname]); // Only depend on pathname
}; 