const express = require('express')
const app = express()
const port = 2000
app.get('/', (req, res)=>{
    res.send("hello subban kaise ho ")
})
app.listen(port, ()=>{
    
})