import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { PrismaClient } from "@prisma/client";
import resolvers from "./resolvers/main";

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });
const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      return {
        prisma,
        req,
      };
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
}
main();
