import { Controller } from 'egg';

export default class UserController extends Controller {
  /**
   * 用户列表
   * @method index
   * @memberof UserController
   */
  async index() {
    this.ctx.body = '后台用户管理列表';
  }
}
