
import express from 'express'
const app = express()

const port = 3001


// parse application/x-www-form-urlencoded
// parse application/json

app.get('/',(req,res)=>{
    res.send(`success`)
})
app.get('/test',(req,res)=>{
    res.send(`success test`)
})

app.listen(port,()=>console.log(`listen on ${port} !!!`))