import { STRING } from "sequelize";
import db from "./db";

export const Post = db.define("post", {
  title: {
    type: STRING,
    allowNull: false,
  },
  text: {
    type: STRING,
    allowNull: false,
  },
  author: {
    type: STRING,
    allowNull: false,
  },
});

export const User = db.define("user", {
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
});
