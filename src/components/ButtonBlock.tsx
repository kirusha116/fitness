'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ButtonBlock() {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isRed, setIsRed] = useState<boolean>(false)
  return (
    <>
      <div className="flex items-center mt-7.5">
        <div
          className={`w-8 h-8 aspect-square border-[1.45px] rounded-sm inline-block hover:cursor-pointer relative ${!isRed ? 'border-[#606566]' : 'border-red-500'} hover:scale-[105%]`}
          onClick={() => {
            setIsRed(false)
            setIsChecked(isChecked => !isChecked)
          }}
        >
          {isChecked && (
            <Image
              src="/fitness/Vector.svg"
              alt="V"
              width={20.36}
              height={14.55}
              className="absolute inset-1/2 -translate-1/2"
            />
          )}
        </div>
        <p
          className={`inline-block leading-[110%] text-base font-normal ml-3 ${!isRed ? 'text-[#CDCDCD]' : 'text-red-400'}  w-151.25`}
        >
          Я согласен с{' '}
          <a href="#" className="underline decoration-1">
            офертой рекуррентных платежей
          </a>{' '}
          и{' '}
          <a href="#" className="underline decoration-1">
            Политикой конфиденциальности
          </a>
        </p>
      </div>
      <button
        className="text-[#191E1F] font-bold text-xl bg-[#FDB056] w-88 py-5 rounded-[1.25rem] hover:cursor-pointer mt-4 hover:scale-[101%]"
        onClick={() => {
          if (!isChecked) setIsRed(true)
        }}
      >
        Купить
      </button>
    </>
  )
}
