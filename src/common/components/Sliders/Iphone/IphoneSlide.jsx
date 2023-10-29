import React from 'react';
import Slider from 'react-slick';
import { ArrowBtnLeft, ArrowBtnRight } from '../../Buttons/Button';
import { newestCollections } from '../../../datas/NewestCollection';
import NewestCollection from '../../MappingComponents/NewestCollection/NewestCollection';

import styles from './IphoneSlide.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.btnRight} onClick={onClick}>
      <ArrowBtnRight />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.btnLeft} onClick={onClick}>
      <ArrowBtnLeft />
    </div>
  );
}

function Iphone() {
  const settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  
  };

  return (
    <div className={styles.containerHomeSlide}>
      <p className={styles.text}>Newest ex.iphones. Collection</p>
      <Slider {...settings} className={styles.container}  >
        {newestCollections.map((newest) => (
          <div key={newest.id} className={styles.containerNewest}>
            <NewestCollection image={newest.image} content={newest.content} color={newest.color} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Iphone;
