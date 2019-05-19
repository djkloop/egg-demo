import { EggAppConfig, EggAppInfo, PowerPartial, Context } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558011371370_766';

  // add your egg config in here
  config.middleware = [ 'auth', 'compress', 'printdate', 'shieldip' ];

  config.session = {
    maxAge: 99999,
    key: 'FUCK_SESSION',
    httpOnly: true,
    encrypt: true,
  };

  // shieldip options
  config.shieldip = {
    ips: [ '127.0.0.3' ],
  };

  // add your special config in here
  const bizConfig = {
    auth: {
      match(ctx: Context) {
        if (ctx.request.url === '/news') {
          return false;
        }
        return true;
      },
    },
    mongo: {
      client: {
        host: '127.0.0.1',
        port: '27017',
        name: 'eggcms',
        user: 'eggadmin',
        password: '123456',
        options: {},
      },
    },
    compress: {
      // enable: false, // 禁用
      threshold: 2048,
    },
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs',
    },
  };

  // http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=123
  // appapi.php?a=getPortalList&catid=20&page=1
  // 配置公共的api
  config.apiUrl = 'http://www.phonegap100.com/';

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
