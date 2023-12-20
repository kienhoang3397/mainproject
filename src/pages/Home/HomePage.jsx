import React from "react";

import styles from "./Home.module.css";

import { SearchOutlined } from "@ant-design/icons";

import Btn from "../../common/components/Buttons/Button";
import { Products } from "../../common/components/MappingComponents/Products/Product";
import AppleWatch from "../../common/components/Sliders/AppleWatch/AppleWatchSlide";
import Iphone from "../../common/components/Sliders/Iphone/IphoneSlide";
import NewestHomePage from "../../common/components/Sliders/NewestHomePage/NewestHomePage";
import Theme from "../../common/components/Themes/Theme";

function HomePage(props) {
  return (
    <div className={styles.homePage}>
      <div className={styles.bg}>
        <article className={styles.article}>
          <p className={styles.text1}>
            Discover Most Affordable Apple products
          </p>
          <p className={styles.text2}>
            Find the best, reliable, and affordable Apple products here. We
            focus on the product quality. Here you can find all the products
            Apple ever made, even the products Apple officially stopped selling.
            So why are you waiting? Just order now!
          </p>
          <div className={styles.searchInput}>
            <div className={styles.textField}>
              <SearchOutlined className={styles.icon} />
              <input
                className={styles.input} 
                placeholder="Find the best product"
              />
              <Btn defaultValue content={"Search"} />
            </div>
          </div>
        </article>

        <img
          src={"https://i.ibb.co/J597ck2/iphone-1.png"}
          className={styles.imgBg}
          alt=""
        />
      </div>

      <section className={styles.categoryField}>
        <p className={styles.titleCategory}>Newest Collection Available</p>
        <div className={styles.noRep}>
          <Products />
        </div>
        <div className={styles.Rep}>
          <NewestHomePage />
        </div>
      </section>

      <div className={styles.iphoneBanner}>
        <section className={styles.contents}>
          <Theme whiteText />
          <p className={styles.iphoneBannerText}>
            From ₹25,000 to ₹10,000,0. Every Model Ever Built
          </p>

          <section className={styles.iphoneBannerBtnField}>
            <Btn width={"100%"} defaultValue content={"Buy"} />
            <Btn width={"100%"} variant2 content={"Learn More"} />
          </section>
        </section>
        <div className={styles.imgIphoneBanner}>
          <img src={"https://i.ibb.co/Qd8dwDt/figure.png"} alt="" />
        </div>
      </div>
      <Iphone />
      <section className={styles.containerBanner}>
        <div className={styles.banner}>
          <img
            src={"https://i.ibb.co/XsTDJt8/photo-1-16001923426181629588387.png"}
            className={styles.leftBannerImg}
            alt=""
          />

          <p className={styles.text}>Apple Watch</p>
          <img
            src={"https://i.ibb.co/XsTDJt8/photo-1-16001923426181629588387.png"}
            className={styles.rightBannerImg}
            alt=""
          />
        </div>
      </section>

      <AppleWatch />

      <div className={styles.newsLetter}>
        <div className={styles.leftContentNews}>
          <p className={styles.textBox1}>Subscribe To Newsletter</p>
          <p className={styles.textBox2}>
            Get free guide about smart watches daily .
          </p>
          <div className={styles.searchInput}>
            <div className={styles.textField}>
              <input
                className={styles.input}
                placeholder="Enter Email Address"
              />
              <Btn defaultValue content={"Search"} />
            </div>
          </div>
        </div>
        <img
          className={styles.imgNewsLetter}
          src={"https://i.ibb.co/mzLPQfJ/newletter.png"}
          alt=""
        />
      </div>
    </div>
  );
}

export default HomePage;
