'use client'

import ButtonBlock from '@/components/ButtonBlock'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Header from '@/components/Header'
import Image from 'next/image'
import { useCallback, useState } from 'react'

export default function Home() {
  const [isDiscount, setIsDiscount] = useState<boolean>(true)
  const noneDiscount = useCallback(() => setIsDiscount(false), [])
  return (
    <>
      <Header noneDiscount={noneDiscount} />
      <main className="container m-auto font-bold max-w-304">
        <p className="text-[2.5rem] mt-12.5 leading-[110%]">
          Выбери подходящий для себя{' '}
          <span className="text-[#FDB056]">тариф</span>
        </p>
        <section className="flex justify-between items-center mt-29.5">
          <Image src="/body.png" alt="body" width={380.73} height={767} />
          <section className="w-187">
            <Grid isDiscount={isDiscount} />
            <div className="px-5 py-4.5 w-fit flex gap-2 items-start bg-[#2D3233] rounded-[1.25rem] mt-1.5">
              <Image src="/Alert.svg" alt="alert" width={24} height={26} />
              <p className="leading-[130%] text-base font-normal w-106.75">
                Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
                результат, чем за 1 месяц
              </p>
            </div>
            <ButtonBlock />
            <p className="text-[#9B9B9B] font-normal text-sm leading-[120%] mt-3.5">
              Нажимая кнопку «Купить», Пользователь соглашается на разовое
              списание денежных средств для получения пожизненного доступа к
              приложению. Пользователь соглашается, что данные
              кредитной/дебетовой карты будут сохранены для осуществления
              покупок дополнительных услуг сервиса в случае желания
              пользователя.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
