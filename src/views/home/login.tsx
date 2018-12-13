import * as React from 'react'

interface Props {
  loginStatus: boolean;
  name?: string;
  age?: number;
  list?: number[]; // 元素类型后面直接跟[]
  // list2?: Array<number>; // 数组范型
  tuple?: [string, number]; // 元组
  any?: any;
  object?: object
}

// enum Color { red = 1, green = 2}
// let C: Color = Color.red

class Login extends React.Component<Props> {
  public render() {
    console.log(this.props)
    return(
      <div>
        {this.props.loginStatus ? <p>111</p> : <p>222</p>}
      </div>
    )
  }
}

export default Login
