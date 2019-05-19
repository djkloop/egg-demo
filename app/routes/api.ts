import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // api
  router.get('/api/user', controller.api.user.index);
  // product
  router.get('/api/product', controller.api.product .index);
};
