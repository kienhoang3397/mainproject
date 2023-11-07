import React from 'react'
import styles from './AboutPage.module.css'
import Logo from '../../assets/image/Logo #8B8E99 1 (1).png'
import Theme from '../../common/components/Themes/Theme'
import ContactHorizontal, { ContactVertical } from '../../common/components/Items/ContactHorizontal'
import { Link } from 'react-router-dom'



function AboutPage() {
  return (
    <div className={styles.bg}>
      <header className={styles.header}>
        <p className={styles.title}>About the ex.iphones.</p>
        <div className={styles.adminAndDate}>
          <p className={styles.admin}>Feyz Ibrahim</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 2 40" fill="none">
            <path d="M1 0V40" stroke="black" stroke-opacity="0.1" />
          </svg>
          <p className={styles.date}>20 September 2023</p>
        </div>
        <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
          at dignissim turpis. Ut vehicula sed<br /> velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
        <div className={styles.photo}>
          <div className={styles.logo}> <img src={Logo} alt="" /></div>
        </div>
        <div>
          <div className={styles.containerBlog}>
          <main className={styles.blogContent}>
          <div className={styles.itemBlog}>
            <p className={styles.titleBlog}>Who ex.iphones. started</p>
            <p className={styles.contentBlog}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at<br />
              dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.<br />
              Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className={styles.itemBlog}>
            <p className={styles.titleBlog}>Things we take for granted</p>
            <p className={styles.contentBlog}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at<br />
              dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.<br />
              Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className={styles.itemBlog}>
            <p className={styles.titleBlog}>Future of ex.iphones.</p>
            <p className={styles.contentBlog} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at<br />
              dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.<br />
              Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className={styles.itemBlog}>
            <p className={styles.titleBlog}>Something nobody knows about us</p>
            <p className={styles.contentBlog}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at<br />
              dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.<br />
              Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className={styles.itemBlog}>
            <p className={styles.titleBlog}>Where do we stand now</p>
            <p className={styles.contentBlog}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at<br />
              dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.<br />
              Praesent feugiat elementum ex ut suscipit.</p>
          </div>
        </main>
        <aside>
          <p className={styles.asideItem}>SHARE</p>
          <ContactVertical dark/>
        </aside>
          </div>
       
        </div>
     
      </header>
      <Link to={('login')}>saasgasgsag</Link>

    </div>
  )
}

export default AboutPage