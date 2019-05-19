import { Service } from 'egg';

/**
 *
 * @export
 * @class NewsServices
 * @extends {Service}
 */
export default class NewsServices extends Service {

  /**
   * 返回爬虫列表
   *
   * @returns
   * @memberof NewsServices
   */
  public async getNewsList() {
    const { ctx, config } = this;

    const prefixUrl = config.apiUrl;
    const _url = `${prefixUrl}appapi.php?a=getPortalList&catid=20&page=1`;
    const response = await ctx.curl(_url);
    const data = JSON.parse(response.data);
    return data.result;
  }

  async getNewsContent(aid: string) {
    const { ctx, config } = this;

    const prefixUrl = config.apiUrl;
    const _url = `${prefixUrl}appapi.php?a=getPortalArticle&aid=${aid}`;
    const response = await ctx.curl(_url);
    const data = JSON.parse(response.data);
    return data.result;
  }
}
