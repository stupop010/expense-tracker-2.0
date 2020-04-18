import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
  }

  type Expense {
    id: Int!
    userId: Int!
    name: String!
  }

  type Token {
    token: String!
  }

  type Query {
    user(id: Int!): User
    getAllUsers: [User]

    findExpenses: [Expense]
    findAllExpenses: [Expense]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Token!
    signIn(email: String!, password: String!): Token!
    deleteUser(id: Int!): Boolean!

    createExpense(name: String!): Expense
    deleteExpense(id: Int!): Boolean!
  }
`;

export default typeDefs;
