export default (state, action) => {
  switch (action.type) {
    case "FETCH_EXPENSES":
      return {
        ...state,
        expenses: action.payload,
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "EDIT_EXPENSE":
      return {
        ...state,
        expenses: replace(state.expenses, action.payload),
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((e) => e.id !== action.payload),
      };
    case "RESET_EXPENSE": {
      return {
        expenses: [],
      };
    }
    default:
      return state;
  }
};

const replace = (array, expense) => {
  const index = array.findIndex((p) => p.id === expense.id);
  if (index === -1) {
    return;
  } else {
    array[index] = expense;
  }
  return array;
};
