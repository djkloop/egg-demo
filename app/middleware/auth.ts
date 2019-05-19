import { Context } from 'egg';

// 这里是你自定义的中间件
export default function authMiddleWare(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.state.csrf = ctx.csrf;
    console.log('good');
    await next();
  };
}
