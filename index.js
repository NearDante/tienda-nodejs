import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import { authenticateToken } from './middlewares/authMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', authenticateToken, productsRoutes);
app.use('/auth', authRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
});


export default app;