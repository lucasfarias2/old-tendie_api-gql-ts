import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import db from "./db/db";
import { Post } from "./db/models";
import resolvers from "./gql/resolvers";

const server = new ApolloServer({ typeDefs: importSchema("./src/gql/schema.graphql"), resolvers });

db.sync().then(() => {
  server.listen().then(({ url }: { url: string }) => {
    // tslint:disable-next-line: no-console
    console.log(`Server running at ${url}`);

    Post.create({
      title: `Testing post ${Math.random()}`,
      text: "Testing post text",
      author: "Lucas Farias",
    });
  });
});
