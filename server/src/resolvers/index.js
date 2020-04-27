import {
  AuthenticationError,
  UserInputError,
  ForbiddenError,
} from "apollo-server";
import "dotenv/config";

import { createToken } from "../utils/jwt";

const resolvers = {
  Query: {
    async user(parent, args, { models, user }) {
      if (!user) throw new ForbiddenError("Not authenticated.");
      return models.User.findOne({ where: { id: user.id } });
    },
    async getAllUsers(parent, args, { models, user }) {
      // if (!user) throw new ForbiddenError("Not authenticated.");
      return models.User.findAll();
    },

    async findExpense(parent, { id }, { models, user }) {
      // if (!user) throw new ForbiddenError("Not authenticated.");
      const userId = 1;
      return models.Expense.findOne({ where: { id, userId } });
    },

    async findAllExpenses(parent, args, { models, user }) {
      // if (!user) throw new ForbiddenError("Not authenticated.");
      return models.Expense.findAll();
    },
  },

  Mutation: {
    async createUser(parent, { name, email, password }, { models, secret }) {
      const user = await models.User.create({
        name,
        email,
        password,
      });
      return { token: createToken(user, secret, "30m") };
    },

    async signIn(parent, { email, password }, { models, secret }) {
      const user = await models.User.findOne({
        where: {
          email,
        },
      });

      if (!user) throw new Error("Invalid credentials.");

      const isValid = await user.validatePassword(password);

      if (!isValid) throw new Error("Invalid credentials.");

      return { token: createToken(user, secret, "30m") };
    },

    async deleteUser(parent, { id }, { models, user }) {
      // if (!user) throw new ForbiddenError("Not authenticated.");
      return await models.User.destroy({
        where: {
          id,
        },
      });
    },

    async createExpense(parent, { name }, { models, user }) {
      // if (!user) throw new ForbiddenError("Not authenticated.");

      const expense = await models.Expense.create({
        name,
        userId: user.id,
      });

      return expense;
    },

    async editExpense(parent, { name, id }, { models, user }) {
      // if (!user) throw new ForbiddenError("Not authenticated.");
      const expense = await models.Expense.findOne({
        where: {
          id,
          // TODO change userId to = user.id
          userId: 1,
        },
      });

      const updateData = {};

      if (name) updateData.name = name;

      expense.update(updateData);

      return expense;
    },

    async deleteExpense(parent, { id }, { models, user }) {
      // if (!user) throw new ForbiddenError("Not authenticated.");
      return await models.Expense.destroy({
        where: {
          id,
          userId: user.id,
        },
      });
    },
  },
};

export default resolvers;
