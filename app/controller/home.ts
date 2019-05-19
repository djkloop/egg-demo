import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // 调用 extend 里面扩展的 helper 方法
    // console.log(ctx.helper.getFormatDate());
    ctx.cookies.set('username', 'djkloop', {
      signed: true,
      httpOnly: true,
      maxAge: 1000 * 3600 * 24,
      encrypt: true,
    });

    ctx.session.userInfo = 'fuck';
    await ctx.render('index');
  }

  /**
   * post 请求
   * @method add
   * @memberof HomeController
   */
  public add() {
    const { ctx } = this;
    console.log(ctx.request.body);
  }
}
