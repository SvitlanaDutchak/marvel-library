import { Link } from "react-router-dom";

const TitleCard = ({name, nameText, helperClass}) => {
  return (
    <div className="characters-card">
      <div className="characters-card__owerlay">
        <div className="characters-card__content">
          <h2 className="main-title">Marvel {name}</h2>
          <p className="text">Your favorite {nameText}  in one library</p>
          <Link to={name} className="button characters-card__btn" >go to search <span className="characters-card__btn--icon"><i className="fa-solid fa-angles-right"></i></span> </Link>
        </div>
      </div>
    </div>
  )
}

export default TitleCard;