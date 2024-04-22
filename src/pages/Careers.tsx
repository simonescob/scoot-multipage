import HeaderSectionMobile from "../components/HeaderSectionMobile";
import HeaderAbout from "../assets/images/about-hero-mobile.jpg"

function Careers() {
  return (
    <section className="pb-8">
      <HeaderSectionMobile img={HeaderAbout} text="Careers" />
    </section>
  )
}

export default Careers;