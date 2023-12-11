import React from 'react';
import { BsRocket } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Btn from '../Buttons/Button';
import styles from './UserDashBoard.module.css';

function UserDashBoard() {
    const user = useSelector((state) => state.userApi.user?.user);
    const orderhistory = useSelector(
      (state) => state.infoUserApi.user?.orderhistory
    );
    return (
        <div className={styles.container}>
            <header className={styles.funfact}>
                <section className={styles.containerProduct}>
                    <div className={styles.containerProductImg}> <BsRocket className={styles.productImg} /></div>
                    <div className={styles.containerProductContent}>
                        <p className={styles.containerProductName}>{orderhistory?.length}</p>
                        <p className={styles.containerProductSold}> Total Orders</p>
                    </div>
                </section>
            
            </header>
            <div className={styles.contentUserDB}>
                <p className={styles.firstContentUserDB}>Hello, {user?.username}</p>
                <p className={styles.secondContentUserDB}>From your account dashboard. you can
                    easily check & view your Recent
                    Orders, manage your Shipping and
                    Billing Addresses and edit your
                    Password and Account Details.</p>
            </div>
            <section className={styles.containerEditfield}>
            <div className={styles.editField}>
                <section className={styles.accountSetting}>
                    <section className={styles.fieldSettingHeading}>
                        <p className={styles.settingHeading}>Account Info</p>
                    </section>
                    <section className={styles.fieldSetting}>
                        <p className={styles.settingHeadingInfo}>
                            <div className={styles.settingUser}>
                                <img className={styles.imgUser} src="https://t4.ftcdn.net/jpg/02/19/17/07/360_F_219170739_FmBbreSQRvr23mLnpoenOzxIQbOwKnUP.jpg" alt="" />
                                <p className={styles.nameUser}>{user?.username}</p>
                            </div>
                            <div className={styles.userInfo}>
                                <p className={styles.userInfoTitle}>Email: <span className={styles.userInfoTitleSpan}>{user?.email}</span></p>
                                <p className={styles.userInfoTitle}>Phone: <span className={styles.userInfoTitleSpan}> {user?.phonenumber}</span></p>
                            </div>
                        </p>
                    </section>
                    <div className={styles.btn}><Link to={'/user/profile'}><Btn variant2 content={'Edit Account'} width={'150px'} height={'50px'} /></Link></div>

                </section>
            </div>
            <div className={styles.editField}>
                <section className={styles.accountSetting}>
                    <section className={styles.fieldSettingHeading}>
                        <p className={styles.settingHeading}>Billing address</p>
                    </section>
                    <section className={styles.fieldSetting}>
                        <p className={styles.settingHeadingInfo}>

                            <div className={styles.userInfo}>
                                <p className={styles.userInfoTitle}> {user?.username}</p>
                                <p className={styles.userInfoTitleSpan}>Mikro Grafio, 4th Gate, Calicut
                                    Pin: 67372</p>
                                <p className={styles.userInfoTitle}>Email: <span className={styles.userInfoTitleSpan}>{user?.email}</span></p>
                                <p className={styles.userInfoTitle}>Phone: <span className={styles.userInfoTitleSpan}> {user?.phonenumber}</span></p>
                            </div>
                        </p>
                    </section>
                    <div className={styles.btn}><Link to={'/user/profile'}><Btn variant2 content={'Edit Address'} width={'150px'} height={'50px'} /></Link></div>

                </section>
            </div>

            </section>
           
        </div>
    )
}

export default UserDashBoard