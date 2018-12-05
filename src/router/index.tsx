import * as React from 'react'

import { Route, Switch } from 'react-router-dom';

import Home from  '../views/home/home'

class RouteConfig extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <Home name="我"/>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default RouteConfig
