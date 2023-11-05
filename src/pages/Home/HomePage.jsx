import React, { useEffect } from 'react'

import styles from './Home.module.css'

import { SearchOutlined } from '@ant-design/icons';
import inphone1 from '../../assets/image/iphone1.png'
import figure from '../../assets/image/figure.png'
import imgNews from '../../assets/image/newletter.png'
import Btn from '../../common/components/Buttons/Button';
import { Products } from '../../common/components/MappingComponents/Products/Product';
import Theme from '../../common/components/Themes/Theme';

import HomeSlide from '../../common/components/Sliders/Iphone/IphoneSlide';
import Iphone from '../../common/components/Sliders/Iphone/IphoneSlide';
import AppleWatch from '../../common/components/Sliders/AppleWatch/AppleWatchSlide';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/slice/todolist';

function HomePage(props) {



  return (
    <div className={styles.homePage}>
      <div className={styles.bg}>
        <div className={styles.imgBg}><img src={inphone1} alt="" /></div>


        <article className={styles.article}>
          <section className={styles.articleContainer}>
            <p className={styles.text1}>
              Discover Most<br></br> Affordable<br></br>  Apple products
            </p>
            <p className={styles.text2}>
              Find the best, reliable, and affordable Apple products<br></br>
              here. We focus on the product quality. Here you can <br></br>
              find all the products Apple ever made, even the<br></br>
              products Apple officially stopped selling. So why are you<br></br>
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


          </section>
        </article>


      </div>
      <div className={styles.category}>
        <section className={styles.categoryField}>
          <p className={styles.titleCategory}>Newest Collection Available</p>
          <Products />
        </section>



      </div>
      <div className={styles.iphoneBanner}>
        <section className={styles.contents}>
          <Theme whiteText />
          <p className={styles.iphoneBannerText}>From ₹25,000 to ₹10,000,0. Every Model Ever Built</p>
          <div className={styles.iphoneBannerBtnField}>
            <Btn defaultValue content={'Buy'} />
            <Btn variant2 content={'Learn More'} />
          </div>
        </section>
        <div className={styles.imgIphoneBanner}><img src={figure} alt="" /></div>
      </div>
      <Iphone />
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