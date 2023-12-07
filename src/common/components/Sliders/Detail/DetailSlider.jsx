import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from './DetaiSlider.module.css';


export function SampleNextArrowDetail(props) {
    const { onClick } = props;
    return (
        <div className={styles.btnRight} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M4.25 12L20.75 12" stroke="#F5F5F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 18.75L20.75 12L14 5.25" stroke="#F5F5F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}
export function SamplePrevArrowDetail(props) {
    const { onClick } = props;
    return (
        <div className={styles.btnLeft} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M20.75 12H4.25" stroke="#F5F5F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 5.25L4.25 12L11 18.75" stroke="#F5F5F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}


export default function DetailSlide({image1, image2, image3, image4, image5, image6}) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, []);

    let slider1;
    let slider2;
    const settingss = {

        nextArrow: <SampleNextArrowDetail />,
        prevArrow: <SamplePrevArrowDetail />

    };

    return (
      <>
        <div className={styles.containerSlider}>
          <Slider
            className={styles.itemDetailSliderMain}
            asNavFor={nav2}
            ref={(slider) => (slider1 = slider)}
            arrows={false}
          >
            <div className={styles.itemDetailSliderMain}>
              <img className={styles.imgDetail} src={image1} alt="" />
            </div>
            <div className={styles.itemDetailSliderMain}>
              <img className={styles.imgDetail} src={image2} alt="" />
            </div>
            <div className={styles.itemDetailSliderMain}>
              <img className={styles.imgDetail} src={image3} alt="" />
            </div>
            <div className={styles.itemDetailSliderMain}>
              <img className={styles.imgDetail} src={image4} alt="" />
            </div>
            <div className={styles.itemDetailSliderMain}>
              <img className={styles.imgDetail} src={image5} alt="" />
            </div>
            <div className={styles.itemDetailSliderMain}>
              <img className={styles.imgDetail} src={image6} alt="" />
            </div>
          </Slider>

          <Slider
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            className={styles.itemDetailSliderChildren}
            {...settingss}
          >
            <img className={styles.itemDetailSlider} src={image1} alt="" />

            <img className={styles.itemDetailSlider} src={image2} alt="" />
            <img className={styles.itemDetailSlider} src={image3} alt="" />
            <img className={styles.itemDetailSlider} src={image4} alt="" />
            <img className={styles.itemDetailSlider} src={image5} alt="" />
            <img className={styles.itemDetailSlider} src={image6} alt="" />
         
          </Slider>
        </div>
      </>
    );
}
