import MainComics from '../components/MainComics';
import Container from 'react-bootstrap/esm/Container';

const Comics = () => {
  return (
    <Container>
      <h2 className='title title-animation'>Comics search</h2>
      <MainComics />
    </Container>
  )
}

export default Comics;