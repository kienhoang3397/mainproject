import React from "react";
import Slider from "react-slick";
import { ArrowBtnLeft, ArrowBtnRight } from "../../Buttons/Button";
import NewestCollection from "../../MappingComponents/NewestCollection/NewestCollection";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { appleWatchs } from "../../../datas/AppleWatch";
import styles from "./AppleWatchSlide.module.css";

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
  );
}

function AppleWatch() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
            <NewestCollection
              image={newest.image}
              content={newest.content}
              color={newest.color}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AppleWatch;
