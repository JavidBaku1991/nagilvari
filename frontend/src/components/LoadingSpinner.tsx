import React from 'react';
import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = 'var(--secondary-main)'
}) => {
  const { t } = useTranslation();

  return (
    <CircularProgress
      size={size}
      sx={{
        color: color,
        animationDuration: '750ms',
        '& .MuiCircularProgress-circle': {
          strokeLinecap: 'round',
        },
      }}
    />
  );
};

export default LoadingSpinner; 