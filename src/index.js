const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello:()=> "Ola peixe"
    }
};

const server = new ApolloServer({ typeDefs, resolvers});
server.listen().then(({ url }) => console.log(` Esta funcionando cabeca de mizeria ${url}`));