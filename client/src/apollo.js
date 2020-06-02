import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4040/graphql",
  request: async (operation) => {
    const token = localStorage.getItem("token");
    try {
      await operation.setContext({
        headers: {
          "x-token": token ? token : "",
        },
      });
    } catch (e) {
      console.log(e);
    }
  },
  onError: ({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(`GraphQL Error: ${message}`);
        // console.log(cache.read());
        if (message.includes("Not authenticated.")) {
          //   cache.writeData({
          //     data: {
          //       isLoggedIn: false,
          //     },
          //   });
          //   return localStorage.removeItem("token");
        }
      });
    }
    if (networkError) {
      console.log(`${networkError.message}`);
    }
  },
});

export default client;
