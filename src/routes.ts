import { Router } from 'express';
import { UserRoutes } from './routes/auth.routes';

export const Routes = Router().use('/user', UserRoutes);
