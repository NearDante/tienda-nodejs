import express from 'express';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import * as productsController from '../controllers/productsController.js';

const router = express.Router();
router.use(authenticateToken);

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/create', productsController.create);
router.delete('/:id', productsController.remove);
router.put('/:id', authenticateToken, productsController.update);

export default router;
