import { Post, User } from "../db/models";

export default {
  Query: {
    posts: () => Post.findAll(),
    users: () => User.findAll(),
  },
};
