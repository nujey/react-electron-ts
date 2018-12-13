import * as React from 'react'

interface Props {
  username: string
}

class UserCenter extends React.Component<Props> {
  public render() {
    console.log(this.props)
    return(
      <div>个人中心{this.props.username}</div>
    )
  }
}

export default UserCenter
