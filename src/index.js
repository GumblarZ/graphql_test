const { ApolloServer, gql } = require('apollo-server');
import users from './data.js';
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
    type Mutation {
        createUser(name: String!, email: String!): User!
    }

    type Query {
        hello: String
        users: [User]!
        getUserByEmail(email: String!): User!
    }
`;


const resolvers = {
    Query: {
        hello:()=> 'Joao',
        users: ()=> users,
        getUserByEmail: (_, args) =>{
            return users.find((user) => user.email === args.email);
        }
    },
    Mutation: {
        createUser: (_, args) => {
            const newUser ={
                _id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true
            };
            users.push(newUser);
            return newUser;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers});
server.listen().then(({ url }) => console.log(` Esta funcionando cabeca de mizeria ${url}`));