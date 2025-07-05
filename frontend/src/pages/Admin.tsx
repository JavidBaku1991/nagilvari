import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, TextField, Button, Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, InputAdornment, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  artist?: string;
  dimensions?: string;
  year?: number;
  category?: string;
  featured?: boolean;
}

const Admin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: '', description: '', price: '', artist: '', dimensions: '', year: '', category: 'paintings', featured: false, image: null as File | null });
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) setLoggedIn(true);
  }, []);

  useEffect(() => {
    if (loggedIn) fetchProducts();
    // eslint-disable-next-line
  }, [loggedIn]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError('Failed to fetch products');
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Login failed');
        return;
      }
      const data = await res.json();
      localStorage.setItem('admin_token', data.token);
      setLoggedIn(true);
      setError('');
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Network error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  // --- Product CRUD ---
  const handleAddOpen = () => {
    setForm({ name: '', description: '', price: '', artist: '', dimensions: '', year: '', category: 'paintings', featured: false, image: null });
    setFormError('');
    setAddOpen(true);
  };
  const handleAddClose = () => setAddOpen(false);

  const handleEditOpen = (product: Product) => {
    setSelectedProduct(product);
    setForm({ 
      name: product.name, 
      description: product.description, 
      price: String(product.price), 
      artist: product.artist || '', 
      dimensions: product.dimensions || '', 
      year: product.year ? String(product.year) : '', 
      category: product.category || 'paintings',
      featured: product.featured || false,
      image: null 
    });
    setFormError('');
    setEditOpen(true);
  };
  const handleEditClose = () => setEditOpen(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type, checked } = e.target;
    if (name === 'image' && files) {
      setForm(f => ({ ...f, image: files[0] }));
    } else if (type === 'checkbox') {
      setForm(f => ({ ...f, [name]: checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    const token = localStorage.getItem('admin_token');
    if (!token) return;
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('artist', form.artist);
    formData.append('dimensions', form.dimensions);
    formData.append('year', form.year);
    formData.append('category', form.category);
    formData.append('featured', String(form.featured));
    if (form.image) formData.append('image', form.image);
    try {
      const res = await fetch(`${API_URL}/api/products`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      if (!res.ok) {
        setFormError('Failed to add product');
        return;
      }
      handleAddClose();
      fetchProducts();
    } catch {
      setFormError('Network error');
    }
  };

  const handleEditProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    const token = localStorage.getItem('admin_token');
    if (!token || !selectedProduct) return;
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('artist', form.artist);
    formData.append('dimensions', form.dimensions);
    formData.append('year', form.year);
    formData.append('category', form.category);
    formData.append('featured', String(form.featured));
    if (form.image) formData.append('image', form.image);
    try {
      const res = await fetch(`${API_URL}/api/products/${selectedProduct._id}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      if (!res.ok) {
        setFormError('Failed to update product');
        return;
      }
      handleEditClose();
      fetchProducts();
    } catch {
      setFormError('Network error');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!window.confirm('Delete this product?')) return;
    const token = localStorage.getItem('admin_token');
    if (!token) return;
    try {
      const res = await fetch(`${API_URL}/api/products/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) {
        alert('Failed to delete product');
        return;
      }
      fetchProducts();
    } catch {
      alert('Network error');
    }
  };

  if (!loggedIn) {
    return (
      <Box sx={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
        <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>Admin Login</Typography>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TextField
              label="Admin Name"
              value={username}
              onChange={e => setUsername(e.target.value)}
              fullWidth
              autoFocus
              autoComplete="username"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              fullWidth
              autoComplete="current-password"
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '70vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', bgcolor: 'background.default', py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 900, width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4">Admin Dashboard</Typography>
          <Button variant="outlined" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
        <Button variant="contained" color="primary" onClick={handleAddOpen} sx={{ mb: 2 }}>
          Add Product
        </Button>
        {loading ? (
          <Typography>Loading products...</Typography>
        ) : (
          <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Artist</TableCell>
                  <TableCell>Dimensions</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.artist || '-'}</TableCell>
                    <TableCell>{product.dimensions || '-'}</TableCell>
                    <TableCell>{product.year || '-'}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>
                      {product.imageUrl && (
                        <img src={`${API_URL}${product.imageUrl}`} alt={product.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }} />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleEditOpen(product)}><EditIcon /></IconButton>
                      <IconButton color="error" onClick={() => handleDeleteProduct(product._id)}><DeleteIcon /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Add Product Dialog */}
        <Dialog open={addOpen} onClose={handleAddClose}>
          <DialogTitle>Add Product</DialogTitle>
          <form onSubmit={handleAddProduct} encType="multipart/form-data">
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 350 }}>
              <TextField label="Name" name="name" value={form.name} onChange={handleFormChange} required fullWidth />
              <TextField label="Description" name="description" value={form.description} onChange={handleFormChange} fullWidth />
              <TextField label="Artist" name="artist" value={form.artist} onChange={handleFormChange} fullWidth />
              <TextField label="Dimensions" name="dimensions" value={form.dimensions} onChange={handleFormChange} fullWidth />
              <TextField label="Year" name="year" value={form.year} onChange={handleFormChange} fullWidth type="number" />
              <TextField label="Category" name="category" value={form.category} onChange={handleFormChange} select fullWidth required margin="normal">
                <MenuItem value="paintings">Paintings</MenuItem>
                <MenuItem value="sculptures">Sculptures</MenuItem>
                <MenuItem value="digital-art">Digital Art</MenuItem>
                <MenuItem value="photography">Photography</MenuItem>
                <MenuItem value="ceramics">Ceramics</MenuItem>
              </TextField>
              <FormControlLabel
                control={<Checkbox checked={form.featured} onChange={handleFormChange} name="featured" color="primary" />}
                label="Featured Product"
              />
              <TextField label="Price" name="price" value={form.price} onChange={handleFormChange} required fullWidth type="number" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
              <Button variant="contained" component="label">
                Upload Image
                <input type="file" name="image" accept="image/*" hidden onChange={handleFormChange} />
              </Button>
              {formError && <Alert severity="error">{formError}</Alert>}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAddClose}>Cancel</Button>
              <Button type="submit" variant="contained">Add</Button>
            </DialogActions>
          </form>
        </Dialog>

        {/* Edit Product Dialog */}
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>Edit Product</DialogTitle>
          <form onSubmit={handleEditProduct} encType="multipart/form-data">
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 350 }}>
              <TextField label="Name" name="name" value={form.name} onChange={handleFormChange} required fullWidth />
              <TextField label="Description" name="description" value={form.description} onChange={handleFormChange} fullWidth />
              <TextField label="Artist" name="artist" value={form.artist} onChange={handleFormChange} fullWidth />
              <TextField label="Dimensions" name="dimensions" value={form.dimensions} onChange={handleFormChange} fullWidth />
              <TextField label="Year" name="year" value={form.year} onChange={handleFormChange} fullWidth type="number" />
              <TextField label="Category" name="category" value={form.category} onChange={handleFormChange} select fullWidth required margin="normal">
                <MenuItem value="paintings">Paintings</MenuItem>
                <MenuItem value="sculptures">Sculptures</MenuItem>
                <MenuItem value="digital-art">Digital Art</MenuItem>
                <MenuItem value="photography">Photography</MenuItem>
                <MenuItem value="ceramics">Ceramics</MenuItem>
              </TextField>
              <FormControlLabel
                control={<Checkbox checked={form.featured} onChange={handleFormChange} name="featured" color="primary" />}
                label="Featured Product"
              />
              <TextField label="Price" name="price" value={form.price} onChange={handleFormChange} required fullWidth type="number" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
              <Button variant="contained" component="label">
                Upload New Image
                <input type="file" name="image" accept="image/*" hidden onChange={handleFormChange} />
              </Button>
              {formError && <Alert severity="error">{formError}</Alert>}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEditClose}>Cancel</Button>
              <Button type="submit" variant="contained">Save</Button>
            </DialogActions>
          </form>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default Admin; 