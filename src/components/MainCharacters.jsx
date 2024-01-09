import React from 'react';
import CharactersList from './ListCharacters';
import Input from './Input';
import Container from 'react-bootstrap/Container';
import {Dropdown, DropdawnList} from "./Dropdown";

class MainCharacters extends React.Component {
  constructor(){
    super()
    this.state = {
      search: '',
      number: '8',
      select: '-modified',
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
          <Input value={this.state} onChange={(e) => this.handleChange(e)} labelName='character'/>
          <Dropdown  onClick={(e) => this.handleShowList(e)} />
          </div>
          <DropdawnList show={this.state.open} value={this.state} onChange={(e) => this.handleChange(e)}  />
        </form>
        <CharactersList value={this.state} />
        </Container>
      </div>
    )

  }
}

export default MainCharacters;