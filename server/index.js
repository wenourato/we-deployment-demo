const express = require('express')
const res = require('express/lib/response')
const path = require('path')

const app = express()

app.get('/', function(req, res){

    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {console.log('Avengers! Assemble ... on port ${port}.')})
// C:\Users\16096\Desktop\DevMountain\Interactive-lectures\Week-6\deployment\server\index.js