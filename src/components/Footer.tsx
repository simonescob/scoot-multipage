import playStore from "../assets/icons/google-play.svg";
import appStore from "../assets/icons/app-store.svg";

import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

function Footer() {
  return (
    <footer id="footer">

      <div className="w-full h-80 bg-dark-navy text-center flex flex-col justify-center items-center">

        <h3 className="text-3xl text-white font-space-mono font-bold mb-5">Sign up and Scoot off today</h3>

        <div className="flex">
          <img src={playStore} alt="google-play" />
          <img src={appStore} alt="App Store" />
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