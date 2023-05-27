interface ButtonYellowProps{
  text: string
}

function ButtonYellow({ text }:ButtonYellowProps) {

  return (
    <button className="px-8 py-4 text-[#FFF] bg-yellow-scoot font-space-mono font-bold">{text}</button>
  )
}

export default ButtonYellow;