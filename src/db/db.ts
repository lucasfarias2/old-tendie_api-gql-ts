import Sequelize from "sequelize";
import { url } from "../config/config";

// @ts-ignore
const db = new Sequelize(url, {
  dialect: "postgres",
  native: true,
});

db.authenticate()
  .then(() => {
    // tslint:disable-next-line: no-console
    console.log("Connection has been established successfully.");
  })
  .catch((err: any) => {
    // tslint:disable-next-line: no-console
    console.error("Unable to connect to the database:", err);
  });

export default db;
