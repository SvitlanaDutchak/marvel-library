import Header from './Header';
import {Menu} from './Menu';
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const isShowMenu = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <div className="hero">
      <div className="hero__owerlay">
        {isShowMenu && <Menu  />}
        <Header className='header'/>
        <div className="hero__content">
          <h1 className="title">marvel library</h1>
          <p className='text'>a simple library for your easy use</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;