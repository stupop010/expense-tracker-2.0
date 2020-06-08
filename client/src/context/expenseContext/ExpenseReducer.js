export default (state, action) => {
  switch (action.type) {
    case "FETCH_EXPENSES":
      return {
        ...state,
        expenses: [...action.payload.findAllExpenses],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
