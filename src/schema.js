const schema = `



"""
A hello world Query
"""
type Query {
     hello: String!
}


type Team {
     id: Int
     name: String
     base: String
     team_principal: String
     power_unit: String
     world_championships: Int
}

type Mutation  {
     createATeam( name: String,
          base: String,
          team_principal: String,
          power_unit: String,
          world_championships: Int): Team
}`;

export { schema };
