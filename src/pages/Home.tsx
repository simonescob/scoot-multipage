import ButtonYellow from "../components/ButtonYellow"
import locate from "../assets/icons/locate.svg"

function Home() {

  const items = [
    {
      img: locate,
      title: 'Locate with app',
      text: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
    },
    {
      img: locate,
      title: 'Locate with app',
      text: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
    },
    {
      img: locate,
      title: 'Locate with app',
      text: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
    },
  ]

  return (
    <section id="home" className="">

      <div className="flex flex-col justify-center items-center px-6 space-y-7 bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-cover h-[93vh] text-white text-center relative">

        <h1 className="font-space-mono font-bold text-4xl">Scooter sharing made simple</h1>

        <p className="font-lexend-deca">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
        </p>

        <ButtonYellow text="Get Scootin"/>

        <div className="absolute top-3/4 left-0 sm:hidden">
          <svg width="140" height="151" viewBox="0 0 140 151" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.9517 145.444L134.378 107.018L95.9517 68.5916" stroke="#FCB72B" stroke-width="15" stroke-linejoin="bevel"/>
            <path d="M-312 8H-41.8852V107.369H134.378" stroke="#FCB72B" stroke-width="15" stroke-linejoin="bevel"/>
          </svg>
        </div>

      </div>

      <div className="py-10 space-y-8">
        
        {
          items.map(item => (

            <div className="flex flex-col justify-center items-center text-center space-y-6">

              <img src={item.img} alt="locate" />

              <div className="font-space-mono font-bold text-xl text-dark-navy">{item.title}</div>

              <div className="text-base font-lexend-deca text-dim-grey">{item.text}</div>

            </div>

          ))
        }

      </div>

    </section>
  )

}

export default Home