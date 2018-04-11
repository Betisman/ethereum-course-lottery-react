import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  state = {
    manager: '',
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    // const manager = await lottery.methods.manager().call({ from: account });
    // if we are using metamask, we don't need to specify { from: account }

    this.setState({ manager });
  }
  
  render() {
    console.log(`web3 version: ${web3.version}`);
    web3.eth.getAccounts().then(console.log);
    return (
      <div className="App">
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}

export default App;
