import express from "express";
import dotenv from "dotenv";
import { ApolloServer, gql } from "apollo-server-express";
dotenv.config();
const port = process.env.PORT || 3000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

const startServer = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

startServer();

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
