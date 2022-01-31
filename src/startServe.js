import { ApolloServer} from 'apollo-server';
import  Mongoose  from 'mongoose';

function startServer({ typeDefs, resolvers}){
    Mongoose.connect('mongodb://localhost:27017/graphql',{
        userNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const server = new ApolloServer({typeDefs, resolvers});
    server.listen().then(({url}) => console.log(`Servido iniciado na porta ${url}`));
}

export default startServer;