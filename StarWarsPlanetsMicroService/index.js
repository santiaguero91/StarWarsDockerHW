const server  = require('./src/server');

const PORT = 3004

server.listen(PORT,()=> {
    console.log(`Characters listening on port ${PORT}`);
})