const app = require('./app');

async function main(){
   await app.listen(3003);
   console.log('Server  on port 3003')
}
main();