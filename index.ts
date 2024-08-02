import dotenv from 'dotenv';
import server from './src/app';
import { database } from './db';
dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;

if (!PORT || isNaN(PORT)) {
  throw new Error('Port is not valid.');
}

const startServer = async () => {
  try {
    await database.sync({ force: true });
    server.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
};

startServer();