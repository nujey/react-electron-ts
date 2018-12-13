import * as React from 'react'

import { Route, Switch } from 'react-router-dom';

import Home from  '../views/home/home'
import Login from '../views/home/login'
import Usercenter from '../views/home/usercenter'
import SongSheet from '../views/songsheet/songsheet'

class RouteConfig extends React.Component<{}, {name: string}> {
  readonly state = {
    name: '张小鹿'
  }
  public render() {
    console.log(this.props)
    return (
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <Home name="首页"/>
          </Route>
          <Route path="/login">
            <Login loginStatus={true}/>
          </Route>

          <Route path="/user" exact={true} component={Usercenter}/>

          <Route path="/user" exact={true} render={(props) => (
            <Usercenter username={this.state.name}/>
          )} />

          <Route path="/user" children={(props) => (
            // console.log(props.match)
            props.match ?
              <Usercenter username={this.state.name} /> :
              <span>Empty</span>
          )}/>
          <Route path="/songsheet/:type" component={SongSheet}/>
        </Switch>
      </div>
    )
  }
}

export default RouteConfig
