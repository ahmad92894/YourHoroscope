const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  name: String
  email: String
  password: String 
}

type Query {
  user: [User]
}
`;


module.exports = typeDefs;


//mutations and Auth