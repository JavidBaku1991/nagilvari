import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem, FormControlLabel, Checkbox
} from '@mui/material';

const categories = [
  { value: 'ceramics', label: 'Ceramics' },
  { value: 'paintings', label: 'Paintings' },
  { value: 'sculptures', label: 'Sculptures' },
  // Add more as needed
];

export interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (product: any) => void;
  initialData?: any;
}

const ProductDialog: React.FC<ProductDialogProps> = ({ open, onClose, onSave, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [price, setPrice] = useState(initialData?.price || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [artist, setArtist] = useState(initialData?.artist || '');
  const [dimensions, setDimensions] = useState(initialData?.dimensions || '');
  const [year, setYear] = useState(initialData?.year || '');
  const [featured, setFeatured] = useState(initialData?.featured || false);
  const [image, setImage] = useState<File | null>(null);

  const handleSave = () => {
    onSave({
      title,
      description,
      price: Number(price),
      category,
      artist,
      dimensions,
      year: Number(year),
      featured,
      image, // send the file object, handle upload in parent
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{initialData ? 'Edit Product' : 'Create Product'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={3}
          margin="normal"
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          select
          fullWidth
          required
          margin="normal"
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Artist"
          value={artist}
          onChange={e => setArtist(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Dimensions"
          value={dimensions}
          onChange={e => setDimensions(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Year"
          type="number"
          value={year}
          onChange={e => setYear(e.target.value)}
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={featured}
              onChange={e => setFeatured(e.target.checked)}
            />
          }
          label="Featured"
        />
        <div style={{ margin: '1rem 0' }}>
          <input
            type="file"
            accept="image/*"
            onChange={e => setImage(e.target.files?.[0] || null)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          {initialData ? 'Update' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog; 