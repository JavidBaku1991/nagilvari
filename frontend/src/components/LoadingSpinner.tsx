import React from 'react';
import { ClipLoader } from 'react-spinners';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface LoadingSpinnerProps {
  loading?: boolean;
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  loading = true,
  size = 50,
  color = '#8B4513'
}) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      <ClipLoader
        color={color}
        loading={loading}
        size={size}
        aria-label={t('common.loading')}
        cssOverride={{
          borderWidth: '3px'
        }}
      />
      <Box
        component="span"
        sx={{
          color: color,
          fontSize: '1rem',
          fontWeight: 500
        }}
      >
        {t('common.loading')}
      </Box>
    </Box>
  );
};

export default LoadingSpinner; 