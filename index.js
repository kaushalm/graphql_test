import express from 'express'

const app = express();


app.get('/', (req, res)=>{
    res.send('Graphql is amazing');
})

app.listen(8000, ()=>{console.log("Running on 8080 port")});