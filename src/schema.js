const schema = `



"""
A hello world Query
"""
type Query {
     hello: String!
}


type Team {
     id: INT
     name: String
     base: String
     team_principal: String
     power_unit: String
     world_championships: Int
}
`;

export { schema };
