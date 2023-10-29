import React from 'react';
import Slider from 'react-slick';
import { ArrowBtnLeft, ArrowBtnRight } from '../../Buttons/Button';
import { newestCollections } from '../../../datas/NewestCollection';
import NewestCollection from '../../MappingComponents/NewestCollection/NewestCollection';
import bannerAppleWatch from '../../../../assets/image/AppleWatchs/tile_s9__cqgqgjzc261y_large.png';
import leftImg from '../../../../assets/image/AppleWatchs/tile_watch_se__cuswe7ukqd6q_large.png'
import rightImg from '../../../../assets/image/AppleWatchs/tile_why_watch__ft68r958qmye_large.png'
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
    <section className={styles.bg}>
      <div className={styles.containerWatchSlide}>
        <div className={styles.banner}>
          <div className={styles.leftBannerImg}><img src={leftImg} alt="" /></div>

          <p className={styles.text}>Apple Watch</p>
          <div className={styles.rightBannerImg}> <img src={rightImg} alt="" /></div>

        </div>
      </div>
      <Slider {...settings} className={styles.container}>
        {appleWatchs.map((newest) => (
          <div key={newest.id} className={styles.containerNewest}>
            <NewestCollection image={newest.image} content={newest.content} color={newest.color} />
          </div>
        ))}
      </Slider>

    </section>
  );
}

export default AppleWatch;
