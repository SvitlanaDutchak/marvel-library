import React from 'react';
import Input from './Input';
import Container from 'react-bootstrap/Container';
import {Dropdown, DropdawnListComics} from "./Dropdown";
import ComicsList from './ListComics';


class MainComics extends React.Component {
  constructor(){
    super()
    this.state = {
      search: '',
      number: '8',
      select: '-modified',
      format: 'comic',
      open: false
    }
  }

  handleChange(e) {
  const target = e.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
  }

  handleShowList(e) {
    this.setState(prevState => ({
      open: !prevState.open
    }));
    e.preventDefault()
  }


  render() {
    return (
      <div className='main'>
        <Container>
        <form className='form'>
        <div className="form__content">
          <Input value={this.state} onChange={(e) => this.handleChange(e)} labelName='comics'/>
          <Dropdown  onClick={(e) => this.handleShowList(e)} />
          </div>
          <DropdawnListComics show={this.state.open} value={this.state} onChange={(e) => this.handleChange(e)}  />
        </form>
        <ComicsList   value={this.state} />
        </Container>
      </div>
    )

  }
}

export default MainComics;