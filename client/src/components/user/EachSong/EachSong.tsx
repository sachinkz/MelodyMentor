import Image,{StaticImageData} from 'next/image'
import React from 'react'
import Button from '../../shared/Button/Button'
import Navbar from '../Navbar/Navbar';

type songProps = {
    videoUrl: string;
    songName: string;
    artistName: string;
    instructor: string;
    style: string;
    img: StaticImageData;
}
type songsArray = {
    songData: songProps[]
}


const EachSong = (props: songsArray) => {
    return (
        <div className='mt-24 min-h-screen'>
            <Navbar onStartPage={false}/>
            {
                props.songData.map((song: songProps) => (
                    <div className='flex gap-3 bg-[#131313] p-2 items-center justify-around mb-2'>
                        <Image src={song.img} alt={song.artistName} width={100} />
                        <div>
                            <h2>{song.songName}</h2>
                            <h3>{song.artistName}</h3>
                        </div>
                        <div>{song.instructor}</div>
                        <div></div>
                        <div>{song.style}</div>
                        <div>
                            <Button clsNames='p-2' redirect={song.videoUrl}>BEGIN</Button>
                        </div>
                    </div>))
            }
        </div>

    )
}

export default EachSong