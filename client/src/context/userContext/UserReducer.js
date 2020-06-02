export default (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      console.log(action);
      return {
        ...state,
        isLoggedIn: true,
        user: { ...action.payload.user },
      };
    default:
      return state;
  }
};
