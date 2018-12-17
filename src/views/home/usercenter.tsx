import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface Props {
  username: string
}
const Component = (props: Props & RouteComponentProps<{}>) => <h2>Welcome! {props.username}</h2>
const WithRouterComponent = withRouter<Props>(Component)

class UserCenter extends React.Component<Props> {
  public render() {
    console.log(this.props)
    return(
      <div>个人中心{this.props.username}</div>
    )
  }
}

export default UserCenter
