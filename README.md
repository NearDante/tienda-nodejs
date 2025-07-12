PROYECTO FINAL - API REST DE PRODUCTOS CON NODE.JS Y FIREBASE

Descripción:
Este proyecto es una API REST para administrar un catálogo de productos. Permite crear, leer, actualizar y eliminar productos con autenticación vía JWT y almacenamiento en Firestore de Firebase.

TECNOLOGÍAS USADAS:
- Node.js
- Express.js
- Firebase Firestore
- JSON Web Tokens (JWT)
- dotenv para manejo de variables de entorno
- CORS para manejo de peticiones cross-origin

CONFIGURACIÓN INICIAL:

1. Clonar el repositorio:
   git clone <url-del-repo>
   cd proyecto-final

2. Instalar dependencias:
   npm install

3. Crear archivo .env en la raíz del proyecto con las siguientes variables (completá con tus datos):
   PORT=3000
   FIREBASE_API_KEY=TU_FIREBASE_API_KEY
   FIREBASE_AUTH_DOMAIN=TU_FIREBASE_AUTH_DOMAIN
   FIREBASE_PROJECT_ID=TU_FIREBASE_PROJECT_ID
   FIREBASE_STORAGE_BUCKET=TU_FIREBASE_STORAGE_BUCKET
   FIREBASE_MESSAGING_SENDER_ID=TU_FIREBASE_MESSAGING_SENDER_ID
   FIREBASE_APP_ID=TU_FIREBASE_APP_ID
   JWT_SECRET=TU_SECRETO_SUPER_SEGURA

4. Ejecutar la aplicación:
   npm start

ENDPOINTS:

Autenticación:
POST /auth/login
- Recibe JSON con:
  {
    "username": "usuario",
    "password": "contraseña"
  }
- Responde con un token JWT:
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }

Productos: (Requieren header Authorization con Bearer token)
Authorization: Bearer <token>

GET /api/products
- Devuelve todos los productos.

GET /api/products/:id
- Devuelve producto por ID.

POST /api/products/create
- Crea un producto nuevo.
- Body JSON:
  {
    "title": "Nombre del producto",
    "price": 150,
    "category": "Categoría"
  }

PUT /api/products/:id
- Actualiza un producto (al menos un campo).
- Body JSON ejemplo:
  {
    "title": "Nuevo título",
    "price": 200,
    "category": "Nueva categoría"
  }

DELETE /api/products/:id
- Elimina un producto por ID.

MANEJO DE ERRORES:

- 401 Unauthorized: Token faltante o inválido.
- 403 Forbidden: Token inválido o expirado.
- 404 Not Found: Recurso no encontrado.
- 400 Bad Request: Datos faltantes o incorrectos.
- 500 Internal Server Error: Error en servidor.

NOTAS:

- Los datos se almacenan en Firebase Firestore.
- Las credenciales sensibles se configuran en variables de entorno.
- Los tokens JWT expiran a las 1 hora de generados.
- La arquitectura está separada en rutas, controladores, servicios, modelos y middlewares para facilitar escalabilidad y mantenimiento.

CONTACTO:

Para consultas o sugerencias, contactame en: tu-email@ejemplo.com

¡Gracias por usar esta API!

Autor: Aruquipa Ezequiel