import HeaderAbout from "../assets/images/about-hero-mobile.jpg"
import HeaderSectionMobile from "../components/HeaderSectionMobile"
import ItemValues from "../components/ItemValues"
import ourTech from "../assets/images/our-tech.jpg"
import ourIntegrity from "../assets/images/our-integrity.jpg"
import ourCommunity from "../assets/images/our-community.jpg"

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
  return (
    <section className="pb-8">
      <HeaderSectionMobile img={HeaderAbout} text="About" />
      <div className="mx-5 space-y-8">
        { values.map(val => <ItemValues img={val.image} title={val.title} description={val.description} />) }
      </div>
    </section>
  )
}

export default Hero