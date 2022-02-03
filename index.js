const express = require('express')
const path = require('path');
const path = require('mysql2');
const app = express()


const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'root',
    database: 'dbPAP',
})

app.use(express.static('./public'))

app.get('/',(req,res)=> {
  res.sendFile(path.join(__dirname, './public/azpi.html'))
})
const port = 3001

app.listen(port, ()=>{
  console.log(`Listenning on port ${port}`)
})