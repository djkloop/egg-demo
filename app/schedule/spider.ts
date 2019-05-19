import { Subscription } from 'egg';
import * as cheerio from 'cheerio';

export default class SpiderFiles extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '40s', // 1 分钟间隔
      type: 'all',
      disable: true, // 指定所有的 worker 都需要执行
    };
  }

  // subscribe; 是真正定时任务执行时被运行的函数;
  async subscribe() {
    const url = 'http://news.baidu.com/';
    const request = await this.ctx.service.spider.requestUrl(url);
    const $ = cheerio.load(request.data.toString(), { decodeEntities: false });
    if ($('title').text().includes('百度新闻——海量中文资讯平台')) {
      console.log($('title').text());
    }
  }
}
