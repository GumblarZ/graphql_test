const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
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
    type Query {
        hello: String
        users: [User]!
        getUserByEmail(email: String!): User!
    }
`;

const users =[
    { _id: String(Math.random()), name: 'Pedro0', email: 'daleste@yahoo.com', active: true},
    { _id: String(Math.random()), name: 'Pedro1', email: 'cabeca_pika@gmail.com', active: true},
    { _id: String(Math.random()), name: 'Pedro2', email: 'daleste@gmail.com', active: true},
    { _id: String(Math.random()), name: 'Pedro', email: 'daleste@gmail.com', active: false}
];

const resolvers = {
    Query: {
        hello:()=> 'Joao',
        users: ()=> users,
        getUserByEmail: (_, args) =>{
            return users.find((user) => user.email === args.email);
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers});
server.listen().then(({ url }) => console.log(` Esta funcionando cabeca de mizeria ${url}`));