import express from 'express'
//import schema from './schema'
import { graphqlHTTP } from 'express-graphql'
//import resolvers from './resolvers'
import {schema} from './schema'


const app = express();

app.get('/', (req, res)=>{
    res.send('Graphql is amazing');
})

//const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    //rootValue: root,
    graphiql: true
}))

app.listen(8000, ()=>{console.log("Running on 8080 port")});