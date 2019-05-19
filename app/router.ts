import { Application } from 'egg';
import AdminRouter from './routes/admin';
import AppRouter from './routes/app';
import ApiRouter from './routes/api';

export default (app: Application) => {
  AdminRouter(app);
  AppRouter(app);
  ApiRouter(app);
};
