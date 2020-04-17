import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
  }

  type Token {
    token: String!
  }

  type Query {
    user(id: Int!): User
    getAllUsers: User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Token!
    signIn(email: String!, password: String!): Token!
    deleteUser(id: Int!): Boolean!
  }
`;

export default typeDefs;
