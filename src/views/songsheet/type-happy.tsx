import * as React from 'react'

interface Props {
  songType: string
}

interface IState {
  songLength: number,
  songType: string
}

class HappySong extends React.Component<Props, IState> {
  readonly state = {} as IState
  public render() {
    return (
      <div>快乐的歌曲</div>
    )
  }
}

export default HappySong
