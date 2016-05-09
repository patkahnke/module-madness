var random = require('./random');
var toUSD = require('./convert-usd');

//var getResult = 'getResult is working';
//var accountBalanceText = 'accountBalanceText is working';
var getResult = toUSD(random(100, 1000000));
var accountBalanceText = function() {
  return 'Account Balance: \n';
};


module.exports.result = getResult;
module.exports.balance = accountBalanceText;
