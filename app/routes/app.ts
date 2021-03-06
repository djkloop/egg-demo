import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/add', controller.home.add);
  router.get('/news', controller.news.index);
  router.get('/newscontent', controller.news.content);
};
