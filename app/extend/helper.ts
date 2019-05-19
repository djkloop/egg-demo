import * as moment from 'moment';

export default {
  formatTime(time) {
    return moment(time * 1000).format('YYYY-MM-DD HH:mm:ss');
  },
  getFormatDate(): string {
    return '获取了一串字符串';
  },
};
