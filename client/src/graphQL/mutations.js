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
