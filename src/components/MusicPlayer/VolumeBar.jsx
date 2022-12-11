import React, { useEffect } from 'react';
import { CiVolumeMute, CiVolumeHigh } from 'react-icons/ci';

export default function VolumeBar({ value, min, max, onChange, setVolume }) {
  useEffect(() => {
    document.body.style.setProperty('--volume-range', `${value * 100}%`)
  }, [value])

  return (
    <div className="flex flex-1 items-center justify-end">
      {value <= 1 && value > 0 && <CiVolumeHigh size={25} color="#8d83b2" onClick={() => setVolume(0)} />}
      {value == 0 && <CiVolumeMute size={25} color="#8d83b2" onClick={() => setVolume(1)} />}
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        id="volumeRange"
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
    </div>
  )
}