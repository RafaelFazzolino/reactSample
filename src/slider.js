import Slider from 'react-slick';
import React from "react";

const sliderStyle = {
  "text-align": "center",
  "align-content": "center",
};

const imageStyle = {
  "margin-left": "16%",
}
export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div style={sliderStyle}>
        <Slider {...settings}>
          <div>
          <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/></div>
              <p>Primeira Imagem</p>
          </div>
          <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/> </div>
            <p>Segunda Imagem</p>
          </div>
          <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/> </div>
            <p>Terceira</p>
            <p>Imagem</p>
          </div>
          <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/> </div>
            <p>Terceira</p>
            <p>Imagem</p>
            <p>Bonita</p>
          </div>

          <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/></div>
            <p>Quarta Imagem</p>
          </div>
          <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/> </div>
            <p>Quinta</p>
            <p>Imagem</p>
            <p>Bonita</p>
          </div>
        </Slider>
      </div>
    );
  }
}
