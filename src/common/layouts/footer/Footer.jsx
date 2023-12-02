import React from 'react'
import Btn from '../../components/Buttons/Button'
import { FormInputEmail, FormInputUsername } from '../../components/Forms/FormInput/FormInput'
import ContactHorizontal from '../../components/Items/ContactHorizontal'
import Logo from '../../components/Logos/Logo'
import styles from './Footer.module.css'


function Footer() {
  return (

    <footer>
      <div className={styles.feedback}>
        <article className={styles.feedbackContent}>
          <p className={styles.info}>Feedback</p>
          <p className={styles.content}>
            <span>Seeking personalized</span><br></br>
            support? <span >Request a call<br></br>
              from our team</span>
          </p>
          <div className={styles.inputType}>
            <FormInputEmail dark />
            <FormInputUsername dark />
          </div>

          <Btn defaultValue={true} className={styles.btn} content={'Send request'} />
          <p className={styles.endContent}>Privacy</p>

        </article>

      </div>
      <aside className={styles.main}>
        <div className={styles.sectionContentUp}>
          <div className={styles.sectionContentUpTop}>
            <div className={styles.sections} >
              <p className={styles.info}>Info</p>
              <ul className={styles.list}>
                <li className={styles.item}>Company</li>
                <li className={styles.item}>Products</li>
                <li className={styles.item}>Engineering</li>
                <li className={styles.item}>Services</li>
                <li className={styles.item}>Productions</li>
              </ul>
            </div>

            <div className={styles.sections}>
              <p className={styles.info}>Contact Us</p>
              <ul className={styles.list}>
                <li className={styles.item}>Gallery</li>
                <li className={styles.item}>Technologies</li>
                <li className={styles.item}>Contacts</li>
              </ul>
            </div>
            <div className={styles.brand}> <Logo greyLogo width={'70px'} height={'70px'} className={styles.sections} /></div>

          </div>


          <div className={styles.sectionContentUpBottom}>
            <div className={styles.sections}>
              <p className={styles.info}>Contact Us</p>
              <ul className={styles.list}>
                <li className={styles.item}>+91 73569 83827</li>
                <li className={styles.item}>help@exiphones.com</li>
                <li className={styles.item}>Calicut, KL, INDIA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.sectionContentDown}>
          <ContactHorizontal light /> <p className={styles.textBottom}>© 2023 — ex-iphones</p></div>


      </aside>


    </footer>





  )
}

export default Footer