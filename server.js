const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

let port = process.env.PORT || 8080

server.listen(port, () => console.log(`listening on port ${port}`))

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
