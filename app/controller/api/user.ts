import { Controller } from 'egg';

export default class ApiUserController extends Controller {
  async index() {
    this.ctx.body = '用户接口';
  }
}
