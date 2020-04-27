import { hello } from "./query";
import { createATeam } from "./mutation";
export const resolvers = {
  Query: {
    hello: (root, args, context) => hello(args, context),
  },
  Mutation: {
    createATeam: (root, args, context) => createATeam(args, context),
  },
};
