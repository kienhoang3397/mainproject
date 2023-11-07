import React from 'react';
import Slider from 'react-slick';
import { trendings } from '../../../datas/Trending';
import Product, { Products } from '../../MappingComponents/Products/Product';
import { SampleNextArrow, SamplePrevArrow } from '../Iphone/IphoneSlide';
import styles from './NewestHomePage.module.css';

function NewestHomePage() {
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
 
  };

  return (
    

     
           
      <Slider {...settings} className={styles.container}>
        {trendings.map((newest) => (
          <div key={newest.id} className={styles.containerNewest}>
            <Product image={newest.image} name={newest.name}  />
          </div>
        ))}
      </Slider>
  


  );
}

export default NewestHomePage;
