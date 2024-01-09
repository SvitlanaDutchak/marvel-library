import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const ModalComics = ({ modified, title, show, onClose, srcMd, srcLg, description, storiesList, prices, creatorsList }) => {
  return (
    show && <div className="popup">
      <div className="popup__overlay">
        <div className="popup__content">
          <Button onClick={onClose} className="popup__btn-close">
            Close
          </Button>
          <div className="popup__content-img">
          <img src={srcMd} alt="image" className='img ' />
          </div>
          <div className='popup__text'>
          <h2 className='card-title'>{title}</h2>
          <p className='card-text'>{description}</p>
          <p className='card-text'>Price($):{prices}</p>
          <p className='card-text'> Resources containing the stories that appear in this comic:</p>
          <ul className='popup__list'> 
          {storiesList}
          </ul>
          <p className='card-text'> List of creators of the comic</p>
          <ul className='popup__list'> 
          {creatorsList}
          </ul>
          <p className='card-text'>Date of last modification <span>{modified}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComics;