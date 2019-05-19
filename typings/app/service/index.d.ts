// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNewsServices from '../../../app/service/NewsServices';
import ExportSpider from '../../../app/service/Spider';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    newsServices: ExportNewsServices;
    spider: ExportSpider;
    test: ExportTest;
  }
}
