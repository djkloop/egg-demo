// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportNews from '../../../app/controller/news';
import ExportAdminArticle from '../../../app/controller/admin/article';
import ExportAdminProduct from '../../../app/controller/admin/product';
import ExportAdminUser from '../../../app/controller/admin/user';
import ExportApiProduct from '../../../app/controller/api/product';
import ExportApiUser from '../../../app/controller/api/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    news: ExportNews;
    admin: {
      article: ExportAdminArticle;
      product: ExportAdminProduct;
      user: ExportAdminUser;
    }
    api: {
      product: ExportApiProduct;
      user: ExportApiUser;
    }
  }
}
