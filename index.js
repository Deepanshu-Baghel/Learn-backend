require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=> {
    res.send('hello Deepanshu ')
})

app.get('/register',(req,res)=>{
    res.send('<h1>Please complete your course </h1>')
})

app.get('/newApp',(req,res)=>{
    res.send("<h2>ab samjh aa raha hai</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


