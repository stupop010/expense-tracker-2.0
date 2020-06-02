export default (state, action) => {
  switch (action.type) {
    case "FETCH_EXPENSES":
      return {
        ...state,
        expenses: [...action.payload.findAllExpenses],
      };
    case "DELETE_EXPENSE":
      console.log(action, state);
      return {
        ...state,
        expenses: [...state.filter((e) => e.id !== action.payload)],
      };
    default:
      return state;
  }
};
