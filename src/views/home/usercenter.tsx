import * as React from 'react'
// import { withRouter, RouteComponentProps } from 'react-router-dom'

interface Props {
  username: string
}
// const Component = (props: Props & RouteComponentProps<{}>) => <h2>Welcome! {props.username}</h2>

// const WithRouterComponent = withRouter<Props>(Component);

// const UserCenter = () => (<WithRouterComponent username="测试的"/>)
interface State {
  name: ''
}
class UserCenter extends React.Component<Props, State> {
  readonly state = {} as State
  public render() {
    console.log(this.state)
    return(
      <div>个人中心{this.props.username} {this.state.name}</div>
    )
  }
}

export default UserCenter
