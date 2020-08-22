import { gql } from "apollo-boost";

export const FIND_EXPENSE = gql`
  query findExpense($id: Int!) {
    findExpense(id: $id) {
      id
      name
      price
      category
      desc
    }
  }
`;

export const SEARCH_DATES = gql`
  query searchDates($dates: String!) {
    searchDates(dates: $dates) {
      name
      price
      desc
      category
      id
    }
  }
`;

export const FETCH_THIS_YEAR_EXPENSES = gql`
  query findThisYearExpenses {
    findThisYearExpenses {
      name
      price
      desc
      category
      id
    }
  }
`;
