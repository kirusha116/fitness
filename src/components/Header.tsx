import Timer from './Timer'

export default function Header(props: { noneDiscount: () => void }) {
  return (
    <header className="w-full bg-[#1D5B43] text-center py-2 font-semibold">
      <p className="text-2xl leading-[130%]">Успейте открыть пробную неделю</p>
      <Timer {...props} />
    </header>
  )
}
