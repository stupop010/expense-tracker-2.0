export default (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
