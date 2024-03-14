import { createSchema, createYoga } from "graphql-yoga";

const yoga = createYoga({
  landingPage: false,
  schema: createSchema({
    typeDefs: `
      type Query {
        greeting: String
      }
    `,
    resolvers: {
      Query: {
        greeting: () => "Hello from Yoga in a Bun app!",
      },
    },
  }),
});

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch: yoga,
});

console.log(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
);
