import { ObjectID } from 'mongodb';

export default {
  /**
   * 获取 MongoDB ObjectID
   *
   * @param {string} id
   * @returns
   */
  getObjectID(id: string) {
    return new ObjectID(id);
  },
};
