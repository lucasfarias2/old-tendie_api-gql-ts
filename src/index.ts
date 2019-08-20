import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import resolvers from "./gql/resolvers";

const server = new ApolloServer({ typeDefs: importSchema("./src/gql/schema.graphql"), resolvers });

server.listen().then(({ url }: { url: string }) => {
  // tslint:disable-next-line: no-console
  console.log(`Server running at ${url}`);
});
