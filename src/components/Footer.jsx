import Container from "react-bootstrap/esm/Container";
import logo from '../images/logo.jpg'

const Footer = () => {
  return (
    <footer className='footer' id="footer">
      <div className="footer__owerlay">
        <Container>
          <div className="footer__content">
          <div className="footer__logo">
          <img src={logo} alt="logo" className="header__logo"/>
        </div>
            <h3 className='title-footer'>Marvel library</h3>

            <div className="footer__icons">
              <a href="https://www.youtube.com/marvel" target="_blank"><i className="fa-brands fa-youtube icon"></i></a>
              <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f icon icon--pad"></i></a>
              <a href="https://www.twitter.com/" target="_blank"><i className="fa-brands fa-twitter icon"></i></a>
              <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram icon"></i></a>
            </div>

            <div className="footer__contacts">
              <p><span className="footer__icon"><i className="fa-solid fa-location-dot"></i></span>New Hyde Park, NY 11040</p>
              <p><span className="footer__icon"><i className="fa-solid fa-phone-volume"></i></span> <a style={{color: '#e0e2e4'}} href="tel:8885115480">888-511-5480</a> </p>
              <p><span className="footer__icon"><i className="fa-solid fa-clock"></i></span> From 07:05AM to 19:30PM</p>
              <p className="text">©2022 MARVEL</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer;