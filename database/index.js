import { Sequelize } from "sequelize";

let sequelize;

export const getDbInstance = () => {
  if (!sequelize) {
    const sql = new Sequelize({
      dialect: "sqlite",
      storage: "./ecommerce.sqlite",
    });
    sequelize = sql;
  }
  return sequelize;
};
