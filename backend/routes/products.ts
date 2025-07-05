import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Product from '../models/Product';
import { authenticateJWT } from '../middleware/auth';

const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to fetch products', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }
});

// Add product (protected)
router.post('/', authenticateJWT, upload.single('image'), async (req, res) => {
  try {
    console.log('Product creation request received');
    console.log('Request body:', req.body);
    console.log('Request file:', req.file);
    
    const { name, description, price, artist, dimensions, year, category, featured } = req.body;
    
    // Validate required fields
    if (!name || !price) {
      console.log('Validation failed: missing name or price');
      return res.status(400).json({ error: 'Name and price are required' });
    }

    // Convert price to number
    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
      console.log('Validation failed: invalid price');
      return res.status(400).json({ error: 'Price must be a valid number' });
    }

    // Convert year to number if provided
    const yearNumber = year ? parseInt(year) : undefined;
    if (year && isNaN(yearNumber!)) {
      console.log('Validation failed: invalid year');
      return res.status(400).json({ error: 'Year must be a valid number' });
    }

    let imageUrl = '';
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
      console.log('Image uploaded:', imageUrl);
    }

    const productData = { 
      name, 
      description, 
      price: priceNumber, 
      artist, 
      dimensions, 
      year: yearNumber, 
      category: category || 'paintings',
      featured: featured === 'true',
      imageUrl 
    };
    
    console.log('Creating product with data:', productData);
    
    const product = await Product.create(productData);
    
    console.log('Product created successfully:', product);
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    if (error instanceof Error) {
      console.error('Error stack:', error.stack);
      res.status(500).json({ error: 'Failed to create product', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to create product' });
    }
  }
});

// Update product (protected)
router.put('/:id', authenticateJWT, upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, artist, dimensions, year, category, featured } = req.body;
    
    // Validate required fields
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    // Convert price to number
    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
      return res.status(400).json({ error: 'Price must be a valid number' });
    }

    // Convert year to number if provided
    const yearNumber = year ? parseInt(year) : undefined;
    if (year && isNaN(yearNumber!)) {
      return res.status(400).json({ error: 'Year must be a valid number' });
    }

    let update: any = { 
      name, 
      description, 
      price: priceNumber, 
      artist, 
      dimensions, 
      year: yearNumber, 
      category: category || 'paintings',
      featured: featured === 'true'
    };
    
    if (req.file) {
      update.imageUrl = `/uploads/${req.file.filename}`;
    }
    
    const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to update product', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to update product' });
    }
  }
});

// Delete product (protected)
router.delete('/:id', authenticateJWT, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to delete product', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }
});

// Test route to debug
router.post('/test', async (req, res) => {
  try {
    console.log('Test route hit');
    console.log('Request body:', req.body);
    console.log('Request headers:', req.headers);
    res.json({ message: 'Test route working', body: req.body });
  } catch (error) {
    console.error('Test route error:', error);
    if (error instanceof Error) {
      res.status(500).json({ error: 'Test route failed', details: error.message });
    } else {
      res.status(500).json({ error: 'Test route failed' });
    }
  }
});

export default router; 