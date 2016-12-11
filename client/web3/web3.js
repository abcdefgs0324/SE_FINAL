// 初始一個 web3 個體，連線到本機 8545
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

web3.personal.unlockAccount('0x988718f785847d8257287ef9758aa63d3d62268f', '<PASSWORD>');

module.exports = web3;
