import { Service } from 'egg';

/**
 * Test Service
 */
export default class SpiderService extends Service {

  /**
   * 爬虫网址
   *
   * @method requestUrl
   * @param url - your name
   */
  public async requestUrl(url: string) {
    const { ctx } = this;

    const result = await ctx.curl(url);

    return result;

  }
}
