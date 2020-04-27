import { PrimsaClient } from "@prisma/client";

const Primsa = new PrismaClient();
export const createATeam = async (args, context) => {
  const team = await Primsa.team.create({
    data: {
      name: args.name,
      base: args.base,
      team_principal: args.team_principal,
      power_unit: args.power_unit,
      world_championships: args.world_championships,
    },
  });

  console.log(team);

  return null;
};
