// app/extend/context.ts
import { Context } from 'egg';

export default {
  foo(this: Context) {
    console.log(this, ' extend');
  },
};
