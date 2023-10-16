// import HeaderAbout from "../assets/images/about-hero-mobile.jpg"
import HeaderSectionMobile from "../components/HeaderSectionMobile"
import ItemValues from "../components/ItemValues"

const Hero = () => {
  return (
    <section className="pb-8">
      <HeaderSectionMobile/>
      <div className="mx-5">
        <ItemValues/>
      </div>
    </section>
  )
}

export default Hero