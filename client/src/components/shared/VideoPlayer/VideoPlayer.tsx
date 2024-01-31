'use client'
import React from 'react';
import YouTube from 'react-youtube';

type videoPlayerProps={
    videoId:string
}


const YouTubePlayer = (props:videoPlayerProps) => {



  const opts = {
    height: '560',
    width: '100%',
    playerVars: {
      autoplay: 0,
      color:'white',
      rel:0
    }
// https://developers.google.com/youtube/player_parameters
  };

  return <YouTube videoId={props.videoId} opts={opts} />;
};

export default YouTubePlayer;
