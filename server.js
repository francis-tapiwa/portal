const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = 1200
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const Queue = require('./Structures/Queue');
const Quicksort = require('./Structures/Quicksort');

var batch = new Queue();

//Body parser
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//Database config
var dbURL = process.env.DB_URL;
var Message = mongoose.model('Message', { message: String, time: String, timeSort: Number })

var db = mongoose.connect(dbURL, (err) => {
    console.log('MongoDb database is running...', err);
})

//Sockets.io config
io.on('connection', socket => {
    console.log('Connected...');
    socket.on('message', value => {
        console.log(value);
    })
})

//Save to database
async function postMessage(req, res) {
    var message = new Message(req.body);
    batch.enqueue(message);
    await batch.process(message);
    res.sendStatus(200)
    console.log('Invoked...' + message)
    console.log(batch.peek());
    console.log(batch.isEmpty());
}

//Retrieve messages from the database
async function getMessages() {
    var query = await Message.find({}, 'message');
    var sortedQuery = Quicksort.quicksort(query);
    console.log(query);
    console.log(sortedQuery);
}

app.post('/message', postMessage);
app.get('/chats', getMessages)

server.listen(port, () => console.log(`Express server is running on Port: ${port}`))