import * as React from 'react';
import './styles/App.css';

import logo from './assets/images/logo.svg';
// import Hello from './views/home/home';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <Hello name="张小鹿" enthusiasmLevel={3}/> */}
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
