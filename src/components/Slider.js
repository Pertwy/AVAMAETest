import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../css/slider.css"
import "../css/grids.css"
import {useHistory} from 'react-router-dom';
import CompanyButton from './CompanyButton';


export default function Slider({bannerDetails}) {

  const history = useHistory();
  function navigateContactUs(){
    history.push("/contact-us")
  }


  return (
    <div>
      <Carousel className="slider" showIndicators={false} showThumbs={false}>
          {bannerDetails.map((slide) => (
            <div key={slide.title}>
            <img src={slide.ImageUrl} alt=""/>


            <div className="site-wide-margin">
              <div className="info-box ">
                <h1 className="h4"><b>{slide.Title}</b></h1>
                <h2 className="h5 slider-subtitle"><b>{slide.Subtitle}</b></h2>
                <CompanyButton title="Contact us" isDark={true} isFullWidth={true} isAlwaysFullWidth={false} clicked={()=>navigateContactUs()}/>
              </div>
              <div className="placeholder">
              </div>
            </div>

          </div>
          ))}
      </Carousel>
      
    </div>
  )
}
