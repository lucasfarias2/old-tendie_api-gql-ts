import { Post } from "../db/models";

export default {
  Query: {
    posts: () => Post.findAll(),
  },
};
