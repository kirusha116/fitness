'use client'

import { useEffect, useState } from 'react'

type Node = {
  id: string
  period: string
  price: number
  full_price: number
  is_best: boolean
  text: string
}

export default function Grid({ isDiscount }: { isDiscount: boolean }) {
  const [data, setData] = useState<Node[] | null>(null)
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    const get = async () => {
      fetch('https://t-core.fit-hub.pro/Test/GetTariffs')
        .then(response => response.json())
        .then(data => {
          const typedData = data as Node[]
          setData([
            ...typedData.filter(({ is_best }) => is_best),
            ...typedData
              .filter(({ is_best }) => !is_best)
              .sort((a, b) => b.full_price - a.full_price),
          ])
          setSelected(
            typedData.find(({ is_best }) => is_best)?.period as string,
          )
        })
    }
    get()
  }, [])

  const GeneralClasses =
    'border-2 mb-3.5 flex items-center border-[#484D4E] hover:cursor-pointer bg-[#313637] relative'
  const FirstChildClasses =
    'flex-row w-full h-47.5 pl-30.5 pt-8.5 pb-7.5 pr-20 rounded-[2.125rem]'
  const OtherChildClasses =
    'flex-col w-[calc(100%/3-14px)] h-83.75 pt-17.5 px-4.5 pb-8.25 rounded-[2.5rem]'
  return (
    <div className="flex flex-wrap justify-between">
      {data &&
        data.map(({ period, price, full_price, text }, index) => (
          <div
            key={period}
            className={`${GeneralClasses} ${!index && FirstChildClasses} ${index && OtherChildClasses} ${selected === period && 'border-[#FDB056]'} hover:scale-[101%]`}
            onClick={() => {
              setSelected(period)
            }}
          >
            <div className="text-center">
              <p className="leading-[120%] font-medium text-[1.625rem]">
                {period}
              </p>
              <p
                className={`${selected === period && 'text-[#FDB056]'} text-[3.125rem] font-semibold mt-4 leading-[100%]`}
              >
                {isDiscount
                  ? price + '\u00A0\u20BD'
                  : full_price + '\u00A0\u20BD'}
              </p>
              {isDiscount && (
                <p className="text-[#919191] text-2xl font-normal leading-[120%] text-right line-through">
                  {full_price + '\u00A0\u20BD'}
                </p>
              )}
            </div>
            <p
              className={`font-normal leading-[130%] text-base ${!index && 'ml-10'} ${index && 'mt-12.5'}`}
            >
              {text}
            </p>
            {isDiscount && (
              <div className="absolute left-12 top-0 w-15 h-7.5 bg-[#FD5656] rounded-b-lg leading-7.5 text-center font-gilroy font-medium text-[1.25rem]">
                {'-' + Math.round((1 - price / full_price) * 100) + '%'}
              </div>
            )}
          </div>
        ))}
    </div>
  )
}
