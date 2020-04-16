import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:3306/expense`
);

const models = {
  User: sequelize.import("./user"),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

export { sequelize };

export default models;
