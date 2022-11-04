
import express from 'express'
const app = express()
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3001


// parse application/x-www-form-urlencoded
// parse application/json
app.use(express.static( __dirname + '/public'));
app.get('/',(req,res)=>{
    res.send(`success`)
})
app.get('/test',(req,res)=>{
    res.send(`success test`)
})

app.listen(port,()=>console.log(`listen on ${port} !!!`))