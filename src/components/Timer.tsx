'use client'
import { useEffect, useState } from 'react'
import Star from './Star'

export default function Timer({ noneDiscount }: { noneDiscount: () => void }) {
  const [time, setTime] = useState<number>(120)

  useEffect(() => {
    if (time) setTimeout(() => setTime(time => time - 1), 1000)
    else noneDiscount()
  }, [noneDiscount, time])

  return (
    <div
      className={`flex justify-center items-center gap-1.5 text-[2.5rem] font-raleway ${time <= 30 && time && 'colorChange'} ${!time && 'text-[#FF4E4E]'}`}
    >
      <Star
        className={`fill-white ${time <= 30 && time && 'colorChange'} ${!time && 'fill-[#FF4E4E]!'}`}
      />
      <span className="ml-1">
        {Math.floor(time / 60) < 10
          ? '0' + Math.floor(time / 60)
          : Math.floor(time / 60)}
      </span>
      <span>:</span>
      <span className="mr-1">
        {time % 60 < 10 ? '0' + (time % 60) : time % 60}
      </span>
      <Star
        className={`fill-white ${time <= 30 && time && 'colorChange'} ${!time && 'fill-[#FF4E4E]!'}`}
      />
    </div>
  )
}
