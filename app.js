var http = require('http');
var balance = require('./modules/account-balance');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(balance.balance() + balance.result);
  res.end();

}).listen(3000);
console.log('listening on port 3000');
