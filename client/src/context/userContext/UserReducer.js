export default (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};
