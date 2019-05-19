// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/middleware/auth';
import ExportCompress from '../../../app/middleware/compress';
import ExportPrintdate from '../../../app/middleware/printdate';
import ExportShieldip from '../../../app/middleware/shieldip';

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    compress: typeof ExportCompress;
    printdate: typeof ExportPrintdate;
    shieldip: typeof ExportShieldip;
  }
}
