import { Context } from 'egg';

// 这里是你自定义的中间件
export default function printDate(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    const config = ctx.app.config;
    config._user_name = 'djkloop';
    await next();
  };
}
