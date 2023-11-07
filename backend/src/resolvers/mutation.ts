import { MutationResolvers } from "@app/__generated__/resolvers-types";

// Use the generated `MutationResolvers` type to type check our mutations!
const Mutation: MutationResolvers = {
  addBook: async (_, { input }, { prisma }) => {
    console.log(prisma);
    return null;
  },
};

export default Mutation;
