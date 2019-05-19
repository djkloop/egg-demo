import { Controller } from 'egg';

export default class ApiProductController extends Controller {
  async index() {
    this.ctx.body = '商品接口';
  }
}
