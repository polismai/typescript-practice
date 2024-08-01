import dotenv from 'dotenv';
import server from './src/app';
dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

if (!PORT || isNaN(PORT)) {
  throw new Error('Port is not valid.');
}

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});