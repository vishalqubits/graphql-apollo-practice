// Note this "Resolvers" type isn't strictly necessary because we are already
// separately type checking our queries and resolvers. However, the "Resolvers"
// generated types is useful syntax if you are defining your resolvers

import { Resolvers } from "@app/__generated__/resolvers-types";
import Query from "./queries";
import Mutation from "./mutation";

// in a single file.
const resolvers: Resolvers = { Query, Mutation };

export default resolvers;
