import * as React from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
// declare var Reflink: any
class Hello extends React.Component<Props, object> {
  constructor(props: Props, public reflink: any ) {
    super(props)
    this.reflink = null
  }

  public render() {
    const { name, enthusiasmLevel = 1} = this.props;
    const refCallback = (node:any) => {
      console.log(node, 666)
      return this.reflink = node
    }
      // this.reflink = node
    // )
    return (
      <div className="hello">
        Hello!{name + getExclamationMarks(enthusiasmLevel)}
        <ul>
        <li><Link to="/login" innerRef={refCallback}>登录</Link></li>

          <li><Link to="/">首页</Link></li>
          <li><Link to="/login">登录</Link></li>
          <li><Link to="/songsheet/sad">歌单</Link></li>

          <li><Link to="/login?name=我">登录</Link></li>

          <li><Link
              to={{
                pathname: "/login",
                search: "?name=我",
                hash: "#login-hash",
                state: { fromDashboard: true }
              }}>首页</Link>
          </li>

          <li><Link to="/login" replace={true}>登录</Link></li>
        </ul>
      </div>
    )
  }
}

export default Hello

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}
