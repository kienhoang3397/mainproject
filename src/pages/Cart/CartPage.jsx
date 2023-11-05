import React from 'react'
import styles from './CartPage.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Couter from '../../common/components/Buttons/Couter/Couter'
import Btn from '../../common/components/Buttons/Button'
import FormInput, { FormInputDefault } from '../../common/components/Forms/FormInput/FormInput'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, removeItemformCart, removeSingleIteams } from '../../redux/slice/cartSlice'

function CartPage() {
    const cartSlice = useSelector(state => state.cart.carts)
    console.log(cartSlice)

    const dispatch = useDispatch()
    const handleIncrement = (e) => {
        dispatch(addtoCart(e))
    }
    const handleDecrement = (e) => {
        dispatch(removeSingleIteams(e))
    }
    const handleRemoveFromCart = (e) => {
        dispatch(removeItemformCart(e))
    }


    let total = 0;
    let totalPrice = 0;



    return (
        <div className={styles.container}>
            <main className={styles.containerCartPage}>
                <div className={styles.cartFullContainer}>
                    <section className={styles.title}>
                        <section className={styles.heading}>
                            <p className={styles.contentCardTotalHeading}>Shopping Card</p>
                        </section>
                        <div className={styles.subHeading}>
                            <p className={styles.contentSubHeading}>Products</p>
                            <p className={styles.contentSubHeading}>Price</p>
                            <p className={styles.contentSubHeading}>Quantity</p>
                            <p className={styles.contentSubHeading}>Sub-Total</p>
                        </div>
                    </section>
                    <div className={styles.containerProduct}>
                        {
                            cartSlice.map(item => {
                                const qnty = item.qnty
                                const subtotal = item.price * item.qnty;
                                totalPrice += subtotal * qnty
                                total += totalPrice
                                return (
                                    <section className={styles.productRow} key={item.id}>
                                        <section className={styles.product}>
                                            <div onClick={handleRemoveFromCart} className={styles.iconProduct}><svg className={styles.icon} onClick={() => dispatch(removeItemformCart({ id: item.id }))} xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                                                <path d="M11.5264 19.9307C16.4969 19.9307 20.5264 15.9012 20.5264 10.9307C20.5264 5.9601 16.4969 1.93066 11.5264 1.93066C6.5558 1.93066 2.52637 5.9601 2.52637 10.9307C2.52637 15.9012 6.5558 19.9307 11.5264 19.9307Z" stroke="#8B8E99" stroke-width="1.5" stroke-miterlimit="10" />
                                                <path d="M14.5264 7.93066L8.52637 13.9307" stroke="#8B8E99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14.5264 13.9307L8.52637 7.93066" stroke="#8B8E99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg></div>
                                            <img className={styles.imgProduct} src={item.image} alt="" />
                                            <p className={styles.nameProduct}>{item.name}</p>
                                        </section>
                                        <section className={styles.priceContainer}>
                                            <del className={styles.delPrice}>₹{item.price + (item.price * 0.25)}</del>
                                            <p className={styles.price}>₹{subtotal}</p>


                                        </section>
                                        <Couter kienhoang={item.qnty} handleCouterDecrease={() => handleDecrement(item)} handleCouterIncrease={() => handleIncrement(item)} />
                                        <p className={styles.totalPrice}>₹{totalPrice}</p>

                                    </section>
                                )
                            })
                        }


                    </div>


                </div>
                <aside className={styles.asideCartPage}>   <div className={styles.cardTotals}>
                    <section className={styles.heading}>
                        <p className={styles.contentCardTotalHeading}>Card Totals</p>
                    </section>
                    <div className={styles.total}>
                        <section className={styles.containerDetailTotal}>
                            <div className={styles.detailTotal}>
                                <p className={styles.contentTotal}>Sub-total</p>
                                <p className={styles.detailContentTotal}>₹{total}</p>
                            </div>
                            <div className={styles.detailTotal}>
                                <p className={styles.contentTotal}>Shipping</p>
                                <p className={styles.detailContentTotal}>Free</p>
                            </div>
                            <div className={styles.detailTotal}>
                                <p className={styles.contentTotal}>Discount</p>
                                <p className={styles.detailContentTotal}>₹999</p>
                            </div>
                            <div className={styles.detailTotal}>
                                <p className={styles.contentTotal}>Tax</p>
                                <p className={styles.detailContentTotal}>₹2,999</p>
                            </div>
                        </section>
                        <section className={styles.lineTotal}></section>
                        <section className={styles.toltalPriceDetail}>
                            <p className={styles.toltalPriceDetailContent}>Total</p>
                            <p className={styles.toltalPriceDetailContent}>₹123,999 INR</p>
                        </section>
                        <Btn defaultValue content={'PROCEED TO CHECKOUT'} />

                    </div>
                </div>

                    <div className={styles.couponCode}>
                        <section className={styles.headingCoupon}>
                            <p className={styles.contentCardTotalHeading}>Coupon Code</p>
                        </section>
                        <div className={styles.applyCoupon}>
                            <section className={styles.form}>
                                <FormInputDefault placeholder={'Coupon Code'} />
                            </section>
                            <section className={styles.btnCoupon}>
                                <Btn variant2 content={'APPLY COUPON'} />
                            </section>
                        </div>

                    </div></aside>


            </main>



        </div>


    )
}

export default CartPage