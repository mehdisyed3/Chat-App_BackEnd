//importing 
import express from 'express'

//10:17

//app config
const app = express()
const port = process.env.PORT || 9000
//middleware



//DBconfic



// surprizee



//api routes

app.get('/', (req,res)=>res.status(200).send('hello world'))


//listen
app.listen(port,() => console.log(`Listening on localhost ${port}`))