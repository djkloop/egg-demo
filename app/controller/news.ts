import { Controller } from 'egg';

/**
 * 新闻列表
 *
 * @export
 * @class NewsController
 * @extends {Controller}
 */
export default class NewsController extends Controller {

  /**
   * 返回数据列表
   *
   * @memberof NewsController
   */
  public async index() {
    const { ctx } = this;
    const list = await ctx.service.newsServices.getNewsList();
    // const mongo = ctx.app.mongo;
    // 查询
    // const findResult = await mongo.find('users');

    // 增加
    // mongo.insertOne('users', {
    //   doc: {
    //     name: '张三',
    //     age: 20,
    //     sex: 1,
    //   },
    // });

    // 修改
    // await mongo.findOneAndUpdate('users', {
    //   filter: {
    //     name: '张三',
    //   },
    //   update: {
    //     $set: {
    //       name: '张三-修改',
    //       age: 22,
    //     },
    //   },
    // });

    // 删除
    // const isDelete = await mongo.findOneAndDelete('users', {
    //   filter: {
    //     _id: ctx.app.getObjectID('5ce10904e31427070515d194'),
    //   },
    // });
    // console.log(isDelete);

    const username = ctx.cookies.get('username', {
      encrypt: true,
    });
    const userInfo = ctx.session.userInfo;
    await ctx.render('news', {
      list,
      username,
      userInfo,
    });
  }

  /**
   * 获取新闻详情页
   *
   * @memberof NewsController
   */
  public async content() {
    const { ctx } = this;
    const { query } = ctx;
    const { aid } = query;
    const list = await this.service.newsServices.getNewsContent(aid);
    console.log(list);
    await ctx.render('newscontent', {
      list: list[0],
    });
  }
}
