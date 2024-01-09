import MainCharacters from '../components/MainCharacters';
import Container from 'react-bootstrap/esm/Container';


const Characters = () => {
  return (
    <Container>
      <h2 className='title title-animation'>Characters search</h2>
      <MainCharacters />
    </Container>
  )
}

export default Characters;