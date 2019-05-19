import { Controller } from 'egg';

export default class ArticleController extends Controller {
  /**
   * 文章列表
   * @method index
   * @memberof ArticleController
   */
  async index() {
    this.ctx.body = '后台文章管理列表';
  }

  /**
   * 增加文章
   * @method add
   * @memberof ArticleController
   */
  async add() {
    this.ctx.body = '后台增加文章管理列表';
  }

  /**
   * 编辑文章
   * @method edit
   * @memberof ArticleController
   */
  async edit() {
    this.ctx.body = '后台编辑文章管理列表';
  }
}
