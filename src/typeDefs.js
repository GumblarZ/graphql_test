export default 
     gql`
type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
}

type Post {
    _id: ID!
    title: String!
    content: String!
    author: User! 
}
type Mutation {
    createUser(name: String!, email: String!): User!
}

type Query {
    hello: String
    users: [User]!
    getUserByEmail(email: String!): User!
}
`
