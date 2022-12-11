import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdPauseCircleFilled } from 'react-icons/md';

export default function PlayPause({ isPlaying, activeSong, song, handlePause, handlePlay }) {
  return (isPlaying && activeSong?.title === song.title ? (
    <AiFillPlayCircle
      size={32}
      className="text-[#8d83b2]"
      onClick={handlePause}
    />
  ) : (
    <MdPauseCircleFilled
      size={34}
      className="text-[#8d83b2]"
      onClick={handlePlay}
    />
  )
  )
}