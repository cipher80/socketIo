const  express = require('express');
const {createServer } = require( "node:http");
const {join} = require('node:path');
const {Server} = require('socket.io');
const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'index.html'))
});

io.on('connection',(socket)=>{
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

});


server.listen(4000,()=>{
    console.log('server is listening on port 4000');
})
