import React from 'react';
import Slider from 'react-slick';
import { ArrowBtnLeft, ArrowBtnRight } from '../../Buttons/Button';
import { newestCollections } from '../../../datas/NewestCollection';
import NewestCollection, { NewestCollectionRep } from '../../MappingComponents/NewestCollection/NewestCollection';
import bannerAppleWatch from '../../../../assets/image/AppleWatchs/tile_s9__cqgqgjzc261y_large.png';

import styles from './AppleWatchSlide.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { appleWatchs } from '../../../datas/AppleWatch';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.btnRight} onClick={onClick}>
      <ArrowBtnRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.btnLeft} onClick={onClick}>
      <ArrowBtnLeft />
    </div>
  )
}

function AppleWatch() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
         
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (

    <div className={styles.bg}>
  

      <Slider {...settings} className={styles.container}>
        {appleWatchs.map((newest) => (
          <div key={newest.id} className={styles.containerNewest}>
            <NewestCollection image={newest.image} content={newest.content} color={newest.color} />
          </div>
        ))}
      </Slider>
    </div>





  );
}


export default AppleWatch;
