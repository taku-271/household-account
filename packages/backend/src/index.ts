import { createSchema, createYoga } from "graphql-yoga";

const yoga = createYoga({
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
  fetch: yoga,
});

console.log(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
);
