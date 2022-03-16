const express = require('express')
const path = require('path');
const mysql2 = require('mysql2');
const app = express()
const connection = require('./dbconnection.js')

/*
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'root',
    database: 'dbPAP',
})
*/
app.use(express.static('./public'))
app.use('/contactos',require('./routes/contactosRoutes'))  
app.get('/',(req,res)=> {
  res.sendFile(path.join(__dirname, './public/html/azpi.html'))
})

app.get('/html/navbar',(req,res)=> {
  res.sendFile(path.join(__dirname, './public/html/navbar.html'))
})

app.get('/html/footer',(req,res)=> {
  res.sendFile(path.join(__dirname, './public/html/footer.html'))
})

const port = 3001

app.listen(port, ()=>{
  console.log(`Listenning on port ${port}`)
})