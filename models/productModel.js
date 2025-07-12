import { collection, getDocs, addDoc, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

const productsCollection = collection(db, 'products');

export async function getAllProducts() {
  const snapshot = await getDocs(productsCollection);
  const products = [];
  snapshot.forEach(doc => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
}

export async function getProductById(id) {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
}

export async function createProduct({ title, price, category }) {
  const docRef = await addDoc(productsCollection, { title, price, category });
  return { id: docRef.id, title, price, category };
}

export async function deleteProduct(id) {
  const docRef = doc(db, 'products', id);
  await deleteDoc(docRef);
  return id;
}

export async function updateProduct(id, data) {
  const docRef = doc(db, 'products', id);
  await updateDoc(docRef, data);
  return { id, ...data };
}