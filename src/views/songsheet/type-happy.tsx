import * as React from 'react'

interface Props {
  songType: string
}

interface State {
  songLength: number,
}

class HappySad extends React.Component<Props, State> {

  readonly state = {} as State

  public render() {
    console.log(this.props, 6666)
    return (
      <div>快乐的歌曲</div>
    )
  }
}

export default HappySad
