// server.js
import app from './app.js';
import cors from 'cors';

const PORT = process.env.PORT || 4000;

// Habilitar CORS
app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
