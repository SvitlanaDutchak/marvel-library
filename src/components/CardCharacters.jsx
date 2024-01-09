import React from 'react';
import Button from "react-bootstrap/esm/Button";
import ModalCharacters from './ModalCharacters';

class CardCharacters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpenModal() {
    this.setState({ open: true })
  }

  handleCloseModal() {
    this.setState({ open: false })
  }

  componentDidUpdate() {
    if (this.state.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  render() {
    const { title, src, description, modified, comicsList, srcMd, srcLg } = this.props;

    return (
      <div className='card'>
        <img src={src} alt='image' className='img' />
        <div className="card__content">
          <h2 className='card-title'>{title}</h2>
          <Button type='button' className='button card-button' onClick={() => this.handleOpenModal()}>Read more</Button>
        </div>
        <ModalCharacters show={this.state.open}
          srcMd={srcMd}
          title={title}
          srcLg={srcLg}
          comicsList={comicsList}
          description={description}
          modified={modified} 
          onClose={() => this.handleCloseModal()} />
      </div>
    )
  }
}
export default {CardComics, CardCharacters};