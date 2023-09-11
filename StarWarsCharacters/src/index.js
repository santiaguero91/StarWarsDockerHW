const app = require('./app');

async function main(){
   await app.listen(3004);
   console.log('Server  on port 3004')
}
main();