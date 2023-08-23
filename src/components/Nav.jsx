import headerlogo from '../assets/images/headerlogo.svg';
// import { hamburger } from '../assets/icons/hamburger.svg';

const Nav = () => {
  return (
    <header>
        <nav>
            <a href="/">
                <img src={headerlogo}/>
            </a>
        </nav>
    </header>
  )
}

export default Nav