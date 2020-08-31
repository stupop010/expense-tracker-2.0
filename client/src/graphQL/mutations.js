import { gql } from "apollo-boost";

export const CREATE_EXPENSE = gql`
  mutation createExpense(
    $name: String!
    $desc: String!
    $price: String!
    $category: String!
  ) {
    createExpense(
      name: $name
      desc: $desc
      price: $price
      category: $category
    ) {
      name
      id
      price
      desc
      category
    }
  }
`;

export const EDIT_EXPENSE = gql`
  mutation editExpense(
    $name: String!
    $desc: String!
    $price: String!
    $category: String!
    $id: Int!
  ) {
    editExpense(
      name: $name
      desc: $desc
      price: $price
      category: $category
      id: $id
    ) {
      name
      id
      price
      desc
      category
    }
  }
`;

export const DELETE_EXPENSE = gql`
  mutation deleteExpense($id: Int!) {
    deleteExpense(id: $id)
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      name
      email
      token
    }
  }
`;
