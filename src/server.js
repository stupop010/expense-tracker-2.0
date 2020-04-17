import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";

import models from "./models";
import resolvers from "./resolvers";
import typeDefs from "./schema";

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
    // me: models.users[1],
    secret: process.env.SECRET,
  },
});

server.applyMiddleware({ app, path: "/graphql" });

const PORT = process.env.PORT || 4040;

models.sequelize
  .sync()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Apollo Server on http://localhost:${PORT}/graphql`);
    })
  )
  .catch((error) => console.log(error));
