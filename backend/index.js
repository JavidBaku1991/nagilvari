const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 4000;
const ADMIN_USER = 'selinfereh';
const ADMIN_PASS = '1357';
const JWT_SECRET = 'supersecretkey';

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, title: 'Product 1', price: 10, description: 'Description 1', image: '' },
  { id: 2, title: 'Product 2', price: 20, description: 'Description 2', image: '' },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/admin/verify', (req, res) => {
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