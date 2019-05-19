import { Controller } from 'egg';

export default class ProductController extends Controller {
  /**
   * 商品列表
   * @method index
   * @memberof ProductController
   */
  async index() {
    console.log(this.ctx.logger.info('yeah'));
    this.ctx.body = '后台商品管理列表';
  }

  /**
   * 增加商品
   * @method add
   * @memberof ProductController
   */
  async add() {
    this.ctx.body = '后台增加商品管理列表';
  }

  /**
   * 编辑商品
   * @method edit
   * @memberof ProductController
   */
  async edit() {
    this.ctx.body = '后台编辑商品管理列表';
  }
}
