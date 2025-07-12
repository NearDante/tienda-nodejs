import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import users from '../data/users.js';
import dotenv from 'dotenv';

dotenv.config();

export function login(req, res) {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });

  const validPassword = bcrypt.compareSync(password, user.passwordHash);
  if (!validPassword) return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
}
