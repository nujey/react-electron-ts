import * as React from 'react'

import history from '../../untils/history'

interface Props {
  loginStatus?: boolean;
}

// @(withRouter as any)
class Login extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
  }
  public handleHistory() {
    history.push("/")
  }
  public render() {
    console.log(this.props)
    return(
      <div>
        <p onClick={this.handleHistory}>首页</p>
        {this.props.loginStatus ? <p>111</p> : <p>222</p>}
      </div>
    )
  }
}
// const Login = withRouter(class extends React.Component<RouteComponentProps> {
//   public handleRouterBack() {
//     this.props.history.push("/")
//   }
//   public render() {
//     console.log(this.props)
//     return(
//       <div>
//         {this.props.loginStatus ? <p>111</p> : <p>222</p>}
//       </div>
//     )
//   }
// })
// const Login = withRouter(Login)
export default Login
