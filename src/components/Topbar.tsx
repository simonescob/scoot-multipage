import ButtonYellow from "./ButtonYellow";

function Topbar() {

  const items = [
    'About',
    'Location',
    'Careers',
  ]

  return (
    <nav className="bg-white flex items-center justify-center h-24">

      <div className="flex justify-between container max-w-6xl font-space-mono">

        <div className="flex items-center">

          <h1 className="text-3xl mr-7">Scoot</h1>

          <ul className="flex space-x-3 cursor-pointer">
            {items.map((item: string, key) => <li key={key}>{item}</li>)}
          </ul>

        </div>

        <div className="">

          <ButtonYellow text="Get Scootin" />

        </div>

      </div>

    </nav>
  )
}

export default Topbar;