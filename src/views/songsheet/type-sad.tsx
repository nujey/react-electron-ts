import * as React from 'react'

interface Props {
  songType: string
}

// interface IState {
//   songLength: number,
//   songType: string
// }

class HappySong extends React.Component<Props,  {songLength: number, songType: string}> {
  // readonly state = {} as IState
  readonly state = {
    songLength: 0,
    songType: '开心'
  }
  
  public render() {
    return (
      <div>快乐的歌曲</div>
    )
  }
}

export default HappySong