import * as productsService from '../services/productsService.js';

export async function getAll(req, res, next) {
  try {
    const products = await productsService.listProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

export async function getById(req, res, next) {
  try {
    const product = await productsService.getProduct(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (error) {
    next(error);
  }
}

export async function create(req, res, next) {
  try {
    const { title, price, category } = req.body;
    if (!title || !price || !category) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }
    const newProduct = await productsService.addProduct({ title, price, category });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
}

export async function remove(req, res, next) {
  try {
    const id = req.params.id;
    const product = await productsService.getProduct(id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    await productsService.removeProduct(id);
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const existing = await productsService.getProduct(id);
    if (!existing) return res.status(404).json({ error: 'Producto no encontrado' });

    const updated = await productsService.updateProduct(id, data);
    res.json(updated);
  } catch (error) {
    next(error);
  }
}