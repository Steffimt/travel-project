import headerlogo from '../assets/images/headerlogo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants';
import React, {useState} from "react";

const Nav = () => {

  const[open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    // <header className="padding-x py-4 z-10 w-full bg-white fixed shadow-header">
    //     <nav className="flex justify-between items-center">
    //         <a href="/">
    //             <img src={headerlogo}
    //             alt="logo"
    //             width={171}
    //             height={66}
    //             />
    //         </a>
    //         <ul className= {`flex ${open ? 'flex-col' : 'hidden'} lg:flex gap-16`}>
    //           {navLinks.map((item)=>(
    //             <li key={item.label}>
    //               <a href={item.href} className="font-poppins leading-normal text-lg text-black">
    //                 {item.label}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //         {/* Show hamburger icon based on screen width */}
    //           <div className="block lg:hidden">
    //             <img
    //               src={hamburger}
    //               alt="hamburger"
    //               width={25}
    //               height={25}
    //               className="cursor-pointer"
    //               onClick={handleMenu}
    //             />
    //           </div>
    //     </nav>
    // </header>
    <header className="padding-x py-4 z-10 w-full bg-white fixed shadow-header">
      <nav className="flex flex-col lg:flex-row justify-between">
        <div className="flex justify-between">
          <a href="#">
            <img src={headerlogo} alt="logo" width={171} height={66} />
          </a>
          {/* Show hamburger icon based on screen width */}
          <div className="lg:hidden ml-4 items-center flex">
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          </div>
        </div>
        <ul className={`flex ${open ? 'flex-col' : 'hidden'} items-center text-center lg:flex lg:flex-row gap-16 lg:mt-0 lg:mb-0 mt-6 mb-6`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-poppins leading-normal text-lg text-black hover:text-purple">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
  </header>
  )
}

export default Nav