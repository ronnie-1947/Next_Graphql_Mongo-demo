import {ApolloServer} from 'apollo-server-micro'
import schema from '../../schemas/schema'
import resolvers from '../../resolvers/resolver'

const  apolloServer  =  new  ApolloServer({  typeDefs:schema,  resolvers  , playground:true});

export  const  config  =  {
    api:  {
        bodyParser:  false
    }
};

export  default  apolloServer.createHandler({ path:  "/api/graphql"  });