import React, { useEffect } from 'react'

export default function SeekBar({ value, min, max, onInput, setSeekTime, appTime }) {
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`
  
  useEffect(() => {
    let audioRange = value * 100 / max
    document.body.style.setProperty('--audio-range', `${audioRange}%`)
  }, [value, max])

  return (
    <div className="flex w-full flex-row items-center justify-center">
      <p className="text-[#8d83b2] tracking-wide text-sm">{value === 0 ? '0 : 00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        id="audioRange"
        className="block w-full md:w-64 lg:w-80 xl:w-96 h-1 mx-2 2xl:mx-2"
      />
      <p className="text-[#8d83b2] tracking-wide text-sm">{max === 0 ? '0 : 00' : getTime(max)}</p>
    </div>
  )
}
