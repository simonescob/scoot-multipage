import playStore from "../assets/icons/google-play.svg";
import appStore from "../assets/icons/app-store.svg";

import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import circleFill from "../assets/patterns/circle-fill.svg";
import circleEmpty from "../assets/patterns/circle-empty.svg";

function Footer() {
  return (
    <footer id="footer">
      <div className="w-full h-80 bg-dark-navy relative text-center flex flex-col justify-center items-center">
      <div className="w-screen flex justify-between absolute top-[140px]">
        <img src={circleEmpty} alt="" />
        <img src={circleFill} alt="" />
      </div>
      <div className="z-10">
        <h3 className="text-3xl text-white font-space-mono font-bold mb-5">Sign up and Scoot off today</h3>
        <div className="flex justify-center">
          <img className="mr-5" src={appStore} alt="App Store" />
          <img className="" src={playStore} alt="google-play" />
        </div>
      </div>
      </div>
      <div className="bg-dark-strong h-[438px] flex flex-col items-center">
        <h3 className="text-3xl text-white font-space-mono font-bold mt-12 mb-10">Scoot</h3>
        <ul className="text-center mb-20 space-y-3">
          <li className="text-dim-grey font-space-mono font-semibold">About</li>
          <li className="text-dim-grey font-space-mono font-semibold">Location</li>
          <li className="text-dim-grey font-space-mono font-semibold">Careers</li>
        </ul>
        <div className="flex items-center space-x-6">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;