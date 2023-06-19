import ButtonYellow from "../components/ButtonYellow";

import locate from "../assets/icons/locate.svg";
import ride from "../assets/icons/ride.svg";
import scooter from "../assets/icons/scooter.svg";
import leftArrow from "../assets/patterns/left-downward-arrow.svg";
import rightArrow from "../assets/patterns/right-arrow.svg";

import nearYou from "../assets/images/near-you.jpg";
import payments from "../assets/images/payments.jpg";
import telemetry from "../assets/images/telemetry.jpg";

function Home() {

  const items = [
    {
      img: locate,
      title: 'Locate with app',
      text: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
    },
    {
      img: scooter,
      title: 'Pick your scooter',
      text: 'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.'
    },
    {
      img: ride,
      title: 'Enjoy the ride',
      text: 'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.'
    },
  ]

  const itemsWithImages = [
    {
      img: telemetry,
      title: 'Easy to use riding telemetry',
      text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
    },
    {
      img: nearYou,
      title: 'Coming to a city near you',
      text: 'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.'
    },
    {
      img: payments,
      title: 'Zero hassle payments',
      text: 'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.'
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

      <div className="container mx-auto px-6 py-10 space-y-20 ">

        {
          itemsWithImages.map((item, key) => (

            <div key={key} className="flex flex-col justify-center items-center text-center space-y-6 relative">

              <div className="absolute top-0 w-screen h-96 z-10 overflow-hidden">

                <img className={`relative ${ key === 1 ? 'top-10 -left-44 scale-[1.3]' : 'top-60 -right-52 scale-[2]'  }`} src={ key === 1 ? rightArrow : leftArrow } alt="arrow" />

              </div>

              <img className="rounded-full" src={item.img} alt="locate" />

              <h2 className="font-space-mono font-bold text-3xl text-dark-navy">{item.title}</h2>

              <div className="text-base font-lexend-deca text-dim-grey">{item.text}</div>

              <ButtonYellow text="Learn more"/>

            </div>

          ))
        }

      </div>

    </section>
  )

}

export default Home