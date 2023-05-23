interface ButtonYellowProps{
  text: string
}

function ButtonYellow({ text }:ButtonYellowProps) {

  return (
    <button className="px-8 py-4 text-[#FFF] bg-yellow-scoot">{text}</button>
  )
}

export default ButtonYellow;