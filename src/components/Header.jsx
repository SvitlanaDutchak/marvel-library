import {DesktopMenu} from './Menu';
import logo from '../images/logo.jpg'
import Container from "react-bootstrap/esm/Container";
import { useMediaQuery } from 'react-responsive'

const Header = () => {
  const isShowMenu = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <header className='header'>
      <Container>
        <div className="header__content">
        <div>
          <img src={logo} alt="logo" className="header__logo"/>
        </div>
        {!isShowMenu && <DesktopMenu />}
        </div>
      </Container>
    </header>
  )
}

export default Header;