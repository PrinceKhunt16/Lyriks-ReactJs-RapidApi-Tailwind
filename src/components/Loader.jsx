import React from 'react'

export default function Loader({ title }) {
  return ( 
    <div className="w-full mt-4 ">
      <h1 className="font-normal font-noto text-3xl text-white text-left">{title || 'Loading'}</h1>
    </div>
  )
}
