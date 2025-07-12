import * as productModel from '../models/productModel.js';

export async function listProducts() {
  return await productModel.getAllProducts();
}

export async function getProduct(id) {
  return await productModel.getProductById(id);
}

export async function addProduct(data) {
  
  return await productModel.createProduct(data);
}

export async function removeProduct(id) {
  return await productModel.deleteProduct(id);
}

export async function updateProduct(id, data) {
  return await productModel.updateProduct(id, data);
}