import React from 'react'
import styles from './UserNav.module.css'
import { RxDashboard } from 'react-icons/rx'
import { AiOutlineClockCircle, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineWallet } from 'react-icons/ai'
import { GrLocation, GrLocationPin, GrMapLocation } from 'react-icons/gr'
import { TbLocationSearch } from 'react-icons/tb'
import { FiLogOut } from 'react-icons/fi'



function UserNav() {
    return (
        <div className={styles.UserNav}>
            <section className={styles.item}>
                <RxDashboard class={styles.icon} />
                <p className={styles.text}>Dashboard</p>
            </section>
            <section className={styles.item}>
                <AiOutlineUser class={styles.icon} />
                <p className={styles.text}>Account Details</p>
            </section>
            <section className={styles.item}>
                <AiOutlineClockCircle class={styles.icon} />
                <p className={styles.text}>Order History</p>
            </section>
            <section className={styles.item}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <path d="M19.3636 9.18182C19.3636 15.5455 11.1818 21 11.1818 21C11.1818 21 3 15.5455 3 9.18182C3 7.01187 3.86201 4.93079 5.3964 3.3964C6.93079 1.86201 9.01187 1 11.1818 1C13.3518 1 15.4328 1.86201 16.9672 3.3964C18.5016 4.93079 19.3636 7.01187 19.3636 9.18182Z" stroke="#8B8E99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.1814 11.9077C12.6876 11.9077 13.9086 10.6866 13.9086 9.1804C13.9086 7.67417 12.6876 6.45312 11.1814 6.45312C9.67514 6.45312 8.4541 7.67417 8.4541 9.1804C8.4541 10.6866 9.67514 11.9077 11.1814 11.9077Z" stroke="#8B8E99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className={styles.text}>Order History</p>
            </section>
            <section className={styles.item}>
                <AiOutlineShoppingCart class={styles.icon} />
                <p className={styles.text}>Shopping Cart</p>
            </section>
            <section className={styles.item}>
                <AiOutlineHeart class={styles.icon} />
                <p className={styles.text}>AiOutlineHeart</p>
            </section>
            <section className={styles.item}>
                <TbLocationSearch class={styles.icon} />
                <p className={styles.text}>AiOutlineHeart</p>
            </section>
            <section className={styles.item}>
                <AiOutlineWallet class={styles.icon} />
                <p className={styles.text}>Wallet</p>
            </section>

            <section className={styles.item}>
                <FiLogOut class={styles.icon} />
                <p className={styles.text}>Log Out</p>
            </section>

        </div>
    )
}

export default UserNav


