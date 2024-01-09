import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const ModalCharacters = ({ modified, title, show, onClose, srcMd, srcLg, description, comicsList }) => {
  return (
    show && <div className="popup">
      <div className="popup__overlay">
        <div className="popup__content">
          <Button onClick={onClose} className=" popup__btn-close">
            Close
          </Button>
          <div className="popup__content-img">
          <img src={srcMd} alt="image" className='img ' />
          </div>
          <div className='popup__text'>
          <h2 className='card-title'>{title}</h2>
          <p className='card-text'>{description}</p>
          <p className='card-text'> Comics in which the character appears:</p>
          <ul className='popup__list'> 
          {comicsList}
          </ul>
          <p className='card-text'>Date of last modification <span>{modified}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCharacters;