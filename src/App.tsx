import * as React from 'react';

import './styles/App.css';
// import logo from './assets/images/logo.svg';
// import Hello from './views/home/home';

import RouteConfig from './router/index'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          头
        </header>
        <div>
          中间内容
            1. 侧栏菜单
            2. 中间主要内容
            <RouteConfig />
        </div>
        <p className="App-intro">
          底部播放栏
        </p>
      </div>
    );
  }
}

export default App;
