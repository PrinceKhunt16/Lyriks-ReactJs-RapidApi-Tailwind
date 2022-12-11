import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsShuffle } from 'react-icons/bs';
import { IoIosPause, IoIosPlay } from "react-icons/io"

export default function Controls({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) {
  return (
    <div className="flex items-center justify-between md:justify-around w-full md:w-64 lg:w-80">
      <BsArrowRepeat size={20} color={repeat ? 'black' : '#8d83b2'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
      {currentSongs?.length && <MdSkipPrevious size={30} color="#8d83b2" className="cursor-pointer" onClick={handlePrevSong} />}
      {isPlaying ? (
        <IoIosPause size={30} color="#8d83b2" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
        <IoIosPlay size={30} color="#8d83b2" onClick={handlePlayPause} className="cursor-pointer" />
      )}
      {currentSongs?.length && <MdSkipNext size={30} color="#8d83b2" className="cursor-pointer" onClick={handleNextSong} />}
      <BsShuffle size={20} color={shuffle ? 'black' : '#8d83b2'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    </div>
  )
}