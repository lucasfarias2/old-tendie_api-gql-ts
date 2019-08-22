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
