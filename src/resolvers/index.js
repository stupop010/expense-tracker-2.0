import { AuthenticationError, UserInputError } from "apollo-server";
import "dotenv/config";
import jwt from "jsonwebtoken";

const createToken = async (user, secret, expiresIn) => {
  const { id, email, name } = user;
  return await jwt.sign({ id, email, name }, secret, expiresIn);
};

const resolvers = {
  Query: {
    async user(parent, { id }, { models }) {
      return models.User.findOne({ where: { id } });
    },
    async getAllUsers(parent, { models }) {
      return models.User.findAll();
    },
  },

  Mutation: {
    async createUser(parent, { name, email, password }, { models, secret }) {
      const user = models.User.create({
        name,
        email,
        password,
      });
      return { token: createToken(user, secret, "30m") };
    },

    async signIn(parent, { email, password }, { models }) {
      const user = models.User.findOne({
        where: {
          email,
        },
      });

      if (!user)
        throw new UserInputError("No user found with this login credentials.");
    },

    async deleteUser(parent, { id }, { models }) {
      return models.User.destroy({
        where: {
          id,
        },
      });
    },
  },
};

export default resolvers;
