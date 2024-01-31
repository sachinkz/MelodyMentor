import EachSong from '@/components/user/EachSong/EachSong'
import React from 'react'
import {songData} from '@/utils/DUMMY_DATAS'

const Songs = () => {
  return (
    <div>
        <EachSong songData={songData}/>
    </div>
  )
}

export default Songs