import {
  AuthenticationError,
  UserInputError,
  ForbiddenError,
} from "apollo-server";
import "dotenv/config";

import { createToken } from "../utils/jwt";

const resolvers = {
  Query: {
    async user(parent, { id }, { models }) {
      return models.User.findOne({ where: { id } });
    },
    async getAllUsers(parent, args, { models, user }) {
      if (!user) throw new ForbiddenError("Not authenticated.");
      return models.User.findAll();
    },

    async findExpenses(parent, args, { models, user }) {},

    async findAllExpenses(parent, args, { models, user }) {},
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

      if (!user) throw new UserInputError("Invalid credentials.");

      const isValid = await user.validatePassword(password);

      if (!isValid) throw new AuthenticationError("Invalid credentials.");

      return { token: createToken(user, secret, "30m") };
    },

    async deleteUser(parent, { id }, { models, user }) {
      if (!user) throw new ForbiddenError("Not authenticated.");
      return await models.User.destroy({
        where: {
          id,
        },
      });
    },
  },
};

export default resolvers;
