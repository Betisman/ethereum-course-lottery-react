import Web3 from 'web3';

// window.web3 will be the MetaMask (assuming it is installed in Chrome) web3. Its proviver will have access to Rinkeby network
const web3 = new Web3(window.web3.currentProvider);

export default web3;
