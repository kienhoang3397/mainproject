import React, { useEffect } from 'react'

import styles from './Home.module.scss'

import { SearchOutlined } from '@ant-design/icons';
import inphone1 from '../../assets/image/iphone1.png'
import figure from '../../assets/image/figure.png'
import imgNews from '../../assets/image/newletter.png'
import Btn from '../../common/components/Buttons/Button';
import { Products } from '../../common/components/MappingComponents/Products/Product';
import Theme from '../../common/components/Themes/Theme';
import leftImg from '../../assets/image/AppleWatchs/tile_watch_se__cuswe7ukqd6q_large.png'
import rightImg from '../../assets/image/AppleWatchs/tile_why_watch__ft68r958qmye_large.png'
import HomeSlide, { IphoneRep } from '../../common/components/Sliders/Iphone/IphoneSlide';
import Iphone from '../../common/components/Sliders/Iphone/IphoneSlide';
import AppleWatch, { AppleWatchRep } from '../../common/components/Sliders/AppleWatch/AppleWatchSlide';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/slice/todolist';
import NewestHomePage from '../../common/components/Sliders/NewestHomePage/NewestHomePage';
import { useNavigate } from 'react-router-dom';
import { getAllUser } from '../../redux/slice/apiRequest';

function HomePage(props) {
 



  return (
    <div className={styles.homePage}>
      <div className={styles.bg}>



        <article className={styles.article}>

          <p className={styles.text1}>
            Discover Most Affordable  Apple products
          </p>
          <p className={styles.text2}>
            Find the best, reliable, and affordable Apple products
            here. We focus on the product quality. Here you can
            find all the products Apple ever made, even the
            products Apple officially stopped selling. So why are you
            waiting? Just order now!
          </p>
          <div className={styles.searchInput}>
            <div className={styles.textField}>
              <SearchOutlined className={styles.icon} />
              <input
                className={styles.input} /* Thêm một lớp CSS cho ô input */
                placeholder='Find the best product'
              />
              <Btn defaultValue content={'Search'} />
            </div>
          </div>



        </article>
        <div className={styles.imgBg}><img src={inphone1} alt="" /></div>


      </div>

      <section className={styles.categoryField}>
        <p className={styles.titleCategory}>Newest Collection Available</p>
        <div className={styles.noRep}><Products /></div>
        <div className={styles.Rep}> <NewestHomePage /></div>

      </section>





      <div className={styles.iphoneBanner}>
        <section className={styles.contents}>
          <Theme whiteText />
          <p className={styles.iphoneBannerText}>From ₹25,000 to ₹10,000,0. Every Model Ever Built</p>

          <section className={styles.iphoneBannerBtnField}>
            <Btn width={'100%'} defaultValue content={'Buy'} />
            <Btn width={'100%'} variant2 content={'Learn More'} />
          </section>



        </section>
        <div className={styles.imgIphoneBanner}><img src={figure} alt="" /></div>
      </div>
     <Iphone />
     <div className={styles.banner}>
        <img src={leftImg} className={styles.leftBannerImg} alt="" />

        <p className={styles.text}>Apple Watch</p>
        <img src={rightImg} className={styles.rightBannerImg} alt="" />

      </div>
      
     <AppleWatch />
     
     
      
      <div className={styles.newsLetter}>
        <div className={styles.leftContentNews}>

          <p className={styles.textBox1}>Subscribe To Newsletter</p>
          <p className={styles.textBox2}>Get free guide about smart watches daily. </p>
          <div className={styles.searchInput}>
            <div className={styles.textField}>

              <input
                className={styles.input} /* Thêm một lớp CSS cho ô input */
                placeholder='Enter Email Address'
              />
              <Btn defaultValue content={'Search'} />
            </div>

          </div>
        </div>
        <div><img src={imgNews} alt="" /></div>




      </div>


    </div>

  );
}


export default HomePage