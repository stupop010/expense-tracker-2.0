import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://calm-fortress-42398.herokuapp.com/graphql",
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
      // eslint-disable-next-line
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(`GraphQL Error: ${message}`);
        if (message.includes("Not authenticated.")) {
        }
      });
    }
    if (networkError) {
      console.log(`${networkError.message}`);
    }
  },
});

export default client;
