import * as React from 'react'

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

// function Hello({ name, enthusiasmLevel = 1 }: Props) {
//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiasmLevel. :D');
//   }
//   return (
//     <div className="hello">
//       <div>
//         Hello!{name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   )
// }

class Hello extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props)
  }
  public render() {
    const { name, enthusiasmLevel = 1} = this.props;
    return (
      <div className="hello">
        Hello!{name + getExclamationMarks(enthusiasmLevel)}
      </div>
    )
  }
}

export default Hello

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}
