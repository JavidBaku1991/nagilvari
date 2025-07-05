import express from 'express';
import Admin from '../models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Seed admin user if not exists
const seedAdmin = async () => {
  const username = 'adminos';
  const password = '123123';
  const existing = await Admin.findOne({ username });
  if (!existing) {
    const hash = await bcrypt.hash(password, 10);
    await Admin.create({ username, password: hash });
    console.log('Seeded admin user: adminos / 123123');
  }
};
seedAdmin();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(401).json({ message: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
  res.json({ token });
});

export default router; 