import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Placeholder products
const products = [
  { id: 1, title: 'Product 1', price: 10, description: 'Description 1', image: '' },
  { id: 2, title: 'Product 2', price: 20, description: 'Description 2', image: '' },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 