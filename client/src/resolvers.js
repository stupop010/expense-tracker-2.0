import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    user: User!
  }

  extend type Launch {
    isInCart: Boolean!
  }

  type User {
    name: String!
    email: String!
    token: String!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [ID!]!
  }
`;

export const resolvers = {};
