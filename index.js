import express from 'express'
import schema from './schema'
import { graphqlHTTP } from 'express-graphql'

const app = express();


app.get('/', (req, res)=>{
    res.send('Graphql is amazing');
})

const root = { friend: () => {
    return {
        "id": 123456,
        "firstName": "kaushal",
        "lastName": "Mehra",
        "gender": "male",
        "email": "a@blur.com"
    }
}}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8000, ()=>{console.log("Running on 8080 port")});