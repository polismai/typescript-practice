import { Router } from 'express';
import userRoutes from '../routes/usuario';

const router = Router();

router.use("/usuarios", userRoutes);

export default router