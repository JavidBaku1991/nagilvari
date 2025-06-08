import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const app = express();
const PORT = 4000;
const ADMIN_USER = 'selinfereh';
const ADMIN_PASS = '1357';
const JWT_SECRET = 'supersecretkey';

app.use(cors());
app.use(express.json());

// Placeholder products
const products = [
  { id: 1, title: 'Product 1', price: 10, description: 'Description 1', image: '' },
  { id: 2, title: 'Product 2', price: 20, description: 'Description 2', image: '' },
];

app.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

app.post('/admin/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/admin/verify', (req: Request, res: Response) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ valid: true, user: decoded });
  } catch (err) {
    res.status(401).json({ valid: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 