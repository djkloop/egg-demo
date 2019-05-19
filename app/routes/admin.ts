import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // admin
  router.get('/admin/user', controller.admin.user.index);
  // article
  router.get('/admin/article', controller.admin.article.index);
  router.get('/admin/article/add', controller.admin.article.add);
  router.get('/admin/article/edit', controller.admin.article.edit);
  // product
  router.get('/admin/product', controller.admin.product.index);
  router.get('/admin/product/add', controller.admin.product.add);
  router.get('/admin/product/edit', controller.admin.product.edit);
};
