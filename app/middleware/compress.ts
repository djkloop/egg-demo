import * as compress from 'koa-compress';

// 这里是你自定义的中间件
export default option => {
  return compress(option);
};
