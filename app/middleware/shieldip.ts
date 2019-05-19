import { Context } from 'egg';

// 这里是你自定义的中间件
export default function shieldIp(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 黑名单
    const ip = ctx.request.ip;
    const { ips } = ctx.app.config.shieldip;
    if (ips.includes(ip)) {
      ctx.status = 403;
      ctx.body = '您的ip不在白名单内';
    } else {
      await next();
    }

  };
}
