import React from 'react'

export default function Track({ isPlaying, isActive, activeSong }) {
  return (
    <div className="flex-1 flex items-center justify-start">
      <div className={`${isPlaying && isActive ? 'animate-[spin_10s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
        <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
      </div>
      <div className="w-[50%] hidden md:block">
        <p className="truncate text-[#8d83b2] font-bold text-lg">
          {activeSong?.title ? activeSong?.title : 'No active Song'}
        </p>
        <p className="truncate text-sm text-[#8d83b2]">
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
        </p>
      </div>
    </div>
  )
}
