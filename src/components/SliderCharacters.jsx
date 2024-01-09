import React from 'react';
import Slider from "react-slick";
import Container from "react-bootstrap/esm/Container";
import img1 from '../images/slider/002irm_ons_crd_03.jpg'
import img2 from '../images/slider/003cap_ons_crd_03.jpg'
import img3 from '../images/slider/004tho_ons_crd_04.jpg'
import img4 from '../images/slider/005smp_ons_crd_02.jpg'
import img5 from '../images/slider/007blp_ons_crd_02.jpg'
import img6 from '../images/slider/009drs_ons_crd_03.jpg'
import img7 from '../images/slider/012scw_ons_crd_03.jpg'
import img8 from '../images/slider/038mmk_com_crd_01.jpg'
import img9 from '../images/slider/079wng_ons_crd_04.jpg'
import img10 from '../images/slider/123shh_com_crd_01.jpg'
import img11 from '../images/slider/246tjf_com_crd_01.jpg'
import img12 from '../images/slider/cap_ons_crd_01.jpg'
import img13 from '../images/slider/006hbb_ons_crd_03.jpg'

import img14 from '../images/slider/po.jpg'
import img15 from '../images/slider/portrait_u.jpg'
import img16 from '../images/slider/portrait_uggfddfg.jpg'
import img17 from '../images/slider/portrait_un.jpg'
import img18 from '../images/slider/portrait_unchggg.jpg'
import img19 from '../images/slider/portrait_uncanny.jpg'
import img20 from '../images/slider/portrait_uncannycfff.jpg'
import img21 from '../images/slider/portrait_uncarh.jpg'
import img22 from '../images/slider/portrait_unp.jpg'
import img23 from '../images/slider/portraithgghgg.jpg'
import img24 from '../images/slider/portrait.jpg'
import img25 from '../images/slider/portrait_un44.jpg'
import img26 from '../images/slider/portraithh.jpg'

class SliderCharacters extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container>
        <Slider {...settings} className="slider">
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img1} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Iron Man</h4>
              <p className='slider-text'>Tony Stark</p>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img2} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Captain America</h4>
              <p className='slider-text'>Steve Rogers</p>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img3} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Thor</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img4} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Spider-Man</h4>
              <p className='slider-text'>Peter Parker</p>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img5} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Black Panther</h4>
              <p className='slider-text'>T'Challa</p>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img6} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Doctor Strange</h4>
              <p className='slider-text'>Stephen Strange</p>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img12} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Captain America</h4>
              <p className='slider-text'>Sam Wilson</p>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img13} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Hulk</h4>
              <p className='slider-text'>Bruce Banner</p>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img11} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Jane Foster</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img9} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Wong</h4>
              <p className='slider-text'>Sorcerer Supreme</p>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img8} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Ms. Marvel</h4>
              <p className='slider-text'>Kamala Khan</p>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img7} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">Wanda Maximoff</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img10} alt="img" className='slide-image' />
              <div className="slider__content">
              <h4 class="slider-title">She-Hulk</h4>
              <p className='slider-text'>Jennifer Walters</p>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    );
  }

}


class SliderComics extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container>
        <Slider {...settings} className="slider">
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img14} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
                <h4 class="slider-title">Captain Carter #2</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img15} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Free Comic Book Day: X-Men #1</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img16} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Star Wars #25</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img17} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Hulk #4</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img18} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Elektra #100</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img19} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Star Wars #22</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img20} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">The Amazing Spider-Man #1</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img21} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Avengers Vs. X-Men #1</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img22} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Deadpool: Bad Blood #3</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img23} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Star Wars: Darth Vader #25</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img24} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Black Panther #5</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img25} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">Thor #1</h4>
              </div>
            </div>
          </div>
          <div className="slider__owerlay">
            <div className="slider__card">
              <img src={img26} alt="img" className='slide-image img-sm' />
              <div className="slider__content">
              <h4 class="slider-title">The Vitals: True EMS Stories #0</h4>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    )
  }
}

export {SliderCharacters, SliderComics};