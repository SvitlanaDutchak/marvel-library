import MainCharacters from './MainCharacters';
import TitleCard from '../components/TitleCard';
import {SliderCharacters, SliderComics} from './SliderCharacters'

const Content = () => {

  return (
    <>
    
    <div className="wrappers">
      <TitleCard name= 'characters' nameText='heroes' helperClass=''/>
      <SliderCharacters />
    </div>
    <div className="home-wrappers">
    <div className="wrappers">
      <TitleCard name= 'comics' nameText='comics' helperClass='characters-card--right'/>
      <SliderComics />
    </div>    
    </div>
    </>
  )
}

export default Content;