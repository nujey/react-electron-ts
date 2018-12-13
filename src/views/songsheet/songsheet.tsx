import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import HappySong from './type-happy'
import SadSong from './type-sad'

interface Props {
  song?: any,
  songStype?: string
}

function DefaultSongs({songStype = 'all'}: Props) {
  if(songStype !== 'all') {
    throw new Error('你不是默认歌单')
  }
  return (
    <div className="song--list">默认歌单</div>
  )
}

class SongSheet extends React.Component<Props, object> {
  public render() {
    console.log(this.props)
    return (
      <div>
        <Switch>
          <Route path="/songsheet/:type" children={(props) => {
            let song:any = ''
            switch(props.match.params.type) {
              case 'all':
                song =  (<DefaultSongs/>)
                break;
              case 'happy':
                song = (<HappySong {...props} songType="happy"/>)
                break;
              case 'sad':
                song =  (<SadSong songType="sad"/>)
                break;
              default:
                song = (<HappySong {...props} songType="happy"/>)
                break;
            }
            return song
          }}/>
        </Switch>
      </div>
    )
  }
}

export default SongSheet
