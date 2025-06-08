import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  InputLabel
} from '@mui/material';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="language-select-label">{t('language')}</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18n.language}
        label={t('language')}
        onChange={handleChange}
      >
        <MenuItem value="en">{t('english')}</MenuItem>
        <MenuItem value="ru">{t('russian')}</MenuItem>
        <MenuItem value="az">{t('azerbaijani')}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher; 