import React from "react";
import Btn from "../../components/Buttons/Button";
import {
  FormInputEmail,
  FormInputUsername,
} from "../../components/Forms/FormInput/FormInput";
import ContactHorizontal from "../../components/Items/ContactHorizontal";
import Logo from "../../components/Logos/Logo";
import styles from "./Footer.module.css";
import { ConfigProvider, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formFooter } from "../../config/configANT";
import { MdEmail } from "react-icons/md";
import { UserAddOutlined } from "@ant-design/icons";

function Footer() {
  
  return (
    <footer className={styles.footer}>
   
      <div className={styles.feedback}>
        <aside className={styles.feedbackContainer}>
          <section className={styles.feedbackHeading}>
            <p className={styles.theme}>FEEDBACK</p>
            <p className={styles.themeTitle}>
              Seeking personalized support?{" "}
              <span className={styles.themeTitleSpan}>
                Request a call from our team
              </span>
            </p>
          </section>
          <section className={styles.feedbackForm}>
            <section className={styles.fieldInput}>
              <label htmlFor="email" className={styles.label}>
               Email
              </label>
              <div>
                <ConfigProvider theme={formFooter}>
                  <Input
                    prefix={<MdEmail />}
                    placeholder="example@email.com"
                    id="email"
                    className={styles.inputArea}
                  />
                </ConfigProvider>
              </div>
            </section>
            <section className={styles.fieldInput}>
              <label htmlFor="name" className={styles.label}>
                Username
              </label>
              <div>
                <ConfigProvider theme={formFooter}>
                  <Input
                    prefix={<UserAddOutlined />}
                    placeholder="Hoang Kien"
                    id="name"
                    className={styles.inputArea}
                  />
                </ConfigProvider>
              </div>
            </section>
          </section>
          <section className={styles.feedbackForm}>
            <Btn
              defaultValue
              content={"Send Request"}
              width={"30%"}
              height={"44px"}
            />
          </section>
        </aside>
        <p className={styles.privacy}>Privacy</p>
      </div>

      <aside className={styles.main}>
        <div className={styles.sectionContentUp}>
          <div className={styles.sectionContentUpTop}>
            <div className={styles.sections}>
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
            <div className={styles.brand}>
              {" "}
              <Logo
                greyLogo
                width={"70px"}
                height={"70px"}
                className={styles.sections}
              />
            </div>
          </div>
          <div className={styles.contact}>
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
            <div className={styles.sectionContentDown}>
              <ContactHorizontal light />{" "}
              <p className={styles.textBottom}>© 2023 — ex-iphones</p>
            </div>
          </div>
        </div>
      </aside>
    </footer>
  );
}

export default Footer;
