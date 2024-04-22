import HeaderAbout from "../assets/images/about-hero-mobile.jpg"
import HeaderSectionMobile from "../components/HeaderSectionMobile"
import ItemValues from "../components/ItemValues"
import ourTech from "../assets/images/our-tech.jpg"
import ourIntegrity from "../assets/images/our-integrity.jpg"
import ourCommunity from "../assets/images/our-community.jpg"

import nearYou from "../assets/images/near-you.jpg";
import payments from "../assets/images/payments.jpg";
import telemetry from "../assets/images/telemetry.jpg";
import { ItemHomeType } from "../types/global"
import ItemHome from "../components/ItemHome"
const Hero = () => {
  const values = [
    {
      image: ourTech,
      title: 'Our tech',
      description: 'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!' 
    },
    {
      image: ourIntegrity,
      title: 'Our integrity',
      description: 'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.' 
    },
    {
      image: ourCommunity,
      title: 'Our community',
      description: 'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.' 
    },
  ]

  
  const itemsWithImages: ItemHomeType[] = [
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
    <section className="pb-8">
      <HeaderSectionMobile img={HeaderAbout} text="About" />
      <div className="">
        {itemsWithImages.map((item, i) => <ItemHome noBtn={false} key={i} index={i} item={item} />)}
      </div>
      <div className="mx-5 space-y-8">
        { values.map(val => <ItemValues img={val.image} title={val.title} description={val.description} />) }
      </div>
    </section>
  )
}

export default Hero