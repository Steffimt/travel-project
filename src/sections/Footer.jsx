import footerLogo from '../assets/images/logo2.svg';
import { footerLinks, socialMedia } from '../constants';
import copyrightSign from '../assets/icons/copyright-sign.svg';
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              width={171}
              height={66}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-poppins text-white-400 sm:max-w-xs">Prepare your adventure for the next getaway at your nearest travel hub. Discover your perfect destination.</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon)=>(
              <div className="flex justify-center w-12 h-12 bg-white rounded-full">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-44 gap-20 flex-wrap lg:justify-end max-lg:justify-between max-lg:w-full">
              {footerLinks.map((section)=>(
                <div key={section}>
                  <h4 className="text-white font-poppins text-2xl leading-normal font-medium mb-4">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link)=>(
                      <li className="mt-3 text-white-400 font-poppins text-base leading-normal hover:text-black cursor-pointer" 
                      key={link.name}>
                        <a>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-poppins">
          <img
            src={copyrightSign}
            alt={"copyright sign"}
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="leading-normal">Copyright. All rights reserved.</p>
        </div>
        <p className="font-poppins cursor-pointer leading-normal">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer