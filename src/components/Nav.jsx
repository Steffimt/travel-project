import headerlogo from '../assets/images/headerlogo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className="padding-x py-4 z-10 w-full bg-white fixed shadow-header">
        <nav className="flex justify-between items-center">
            <a href="/">
                <img src={headerlogo}
                alt="logo"
                width={171}
                height={66}
                />
            </a>
            <ul className="flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item)=>(
                <li key={item.label}>
                  <a href={item.href} className="font-poppins leading-normal text-lg text-black">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden max-lg:block">
              <img src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              />
            </div>
        </nav>
    </header>
  )
}

export default Nav