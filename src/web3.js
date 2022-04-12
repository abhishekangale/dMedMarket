import Web3 from 'web3';
// import contract from 'truffle-contract';
// import _ from 'lodash';

const provider = new Web3.providers.HttpProvider('http://localhost:8545');

export const web3 = new Web3(provider);
export const contract = web3.eth.contract(ABI).at(address);
