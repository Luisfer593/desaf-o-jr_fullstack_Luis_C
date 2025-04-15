import app from './app.js';  // Asegúrate de que la ruta sea correcta dependiendo de la ubicación de tu archivo app.js
import cors from 'cors';

const PORT = process.env.PORT || 4000;  // Usamos el puerto de Vercel o 4000 por defecto

// Habilitar CORS para todas las rutas
app.use(cors());

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
