import * as React from 'react'

import { Route, Switch } from 'react-router-dom';

import Home from  '../views/home/home'
import Login from '../views/home/login'

class RouteConfig extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <Home name="我"/>
          </Route>
          <Route path="/login">
            <Login loginStatus={true}/>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default RouteConfig
