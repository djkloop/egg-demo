import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mongo: {
    enable: true,
    package: 'egg-mongo-native',
  },
};

export default plugin;
