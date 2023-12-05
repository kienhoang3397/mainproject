import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import {
  PiCreditCardLight,
  PiHandshakeLight,
  PiHeadphonesLight,
  PiMedalDuotone,
} from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Btn from "../../../common/components/Buttons/Button";
import { DropMenuCustom } from "../../../common/components/DropMenu/DropMenuSort/DropMenuSort";
import DetailSlide from "../../../common/components/Sliders/Detail/DetailSlider";
import { dataProductPages } from "../../../common/datas/ProductListingData";
import "./Detail.css";

import store from "../../../redux/store";
import { addToCart } from "../../../redux/slice/cartApiSlice";
import { fetchUser } from "../../../redux/slice/userApiSlice";
import { addTowishlist } from "../../../redux/slice/wishlistApiSlice";

function Detail() {
  const { productId } = useParams();
  const productList = useSelector((state) => state.productsApi?.product?.items);
  const product = productList.find((prod) => prod._id === productId);
  const token = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );

  const dispatch = useDispatch();

  const accessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );

 const handleAddToCart = () => {
   const quantity = 1;

   dispatch(addToCart({ productId, quantity, token }))
     .then(() => {
       dispatch(fetchUser(token));
     })
     .catch((error) => {
       console.error("Error adding to cart:", error);
     });
 };

 const handleAddToWishList = () => {
   dispatch(addTowishlist({ productId, token }))
     .then(() => {
       dispatch(fetchUser(token));
     })
     .catch((error) => {
       console.error("Error adding to wishlist:", error);
     });
 };


  return (
    <>
      <div className="detailContainer">
        <DetailSlide />

        <section className="detailDescription">
          <div className="ratingDetail">
            <div className="startRatingDetail">
              <AiFillStar className="ratingStar" />
              <AiFillStar className="ratingStar" />
              <AiFillStar className="ratingStar" />
              <AiFillStar className="ratingStarNoFill" />
              <AiFillStar className="ratingStarNoFill" />
            </div>
            <p className="contentHeadingDetail">4.7 Star Rating</p>
            <p className="contentHeadingDetailFBack">(10 User feedback)</p>
          </div>

          <h1 className="nameProductDetail">{product?.name}</h1>

          <section className="propertyDetail">
            <div className="rowPropDetail">
              <div>
                ID: <span className="bold">{product?._id}</span>
              </div>
              <div>
                <span>
                  Availability:{" "}
                  <span className="bold">
                    {product?.stock > 0 ? "In Stock" : "Not Available"}{" "}
                  </span>
                </span>
              </div>
            </div>
            <div className="rowPropDetail">
              <div>
                Brand: <span className="bold">Apple</span>
              </div>
              <div>
                <span>
                  Category: <span className="bold">In {product?.category}</span>
                </span>
              </div>
            </div>
          </section>
          <section className="priceDetailField">
            <div className="priceDetail">₹{product?.price}</div>
            <del className="delPriceDetail">
              ₹{product?.price + product?.price * 0.25}
            </del>
            <section className="badgeField">
              <div className="badge">{product?.discount * 100}% OFF</div>
            </section>
          </section>
          <div className="devider"></div>
          <div className="dropMenuDetailContainer">
            <DropMenuCustom title={"hehe"} item1={123412124} item2 item3 />
            <DropMenuCustom item1={123412124} />
            <DropMenuCustom item1={123412124} />
          </div>
          <div className="btnDetail"></div>
          <Btn
            defaultValue
            content={" Add to Cart"}
            handleBtn={() => handleAddToCart(product._id, 1)}
          ></Btn>
          <Btn
            defaultValue
            content={" Add to WishList"}
            handleBtn={() => handleAddToWishList(product._id)}
          ></Btn>

          <Link to={"/shoppingcart"}>
            <Btn variant2 content={"Click me to Cart"} />
          </Link>

          <div className="btnDetail">
            <Btn defaultValue content={"Buy Now"} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <g clipPath="url(#clip0_105_4831)">
                <path
                  d="M1 9C1 4.30558 4.80558 0.5 9.5 0.5H43.5C48.1944 0.5 52 4.30558 52 9V43C52 47.6944 48.1944 51.5 43.5 51.5H9.5C4.80558 51.5 1 47.6944 1 43V9Z"
                  stroke="#8B8E99"
                />
                <path
                  d="M33.5 16H19.2143C18.8192 16 18.5 16.3192 18.5 16.7143V35.2857C18.5 35.6808 18.8192 36 19.2143 36H33.5C33.8951 36 34.2143 35.6808 34.2143 35.2857V16.7143C34.2143 16.3192 33.8951 16 33.5 16ZM27.6964 17.6071H29.8393V22.2924L28.8013 21.5357L27.6964 22.3259V17.6071ZM32.6071 34.3929H20.1071V17.6071H26.3571V24.2344C26.3571 24.308 26.3795 24.3817 26.4241 24.442C26.4512 24.4803 26.4856 24.5128 26.5254 24.5377C26.5652 24.5627 26.6095 24.5794 26.6558 24.5871C26.702 24.5948 26.7494 24.5932 26.7951 24.5825C26.8408 24.5717 26.8839 24.5521 26.9219 24.5246L28.7924 23.1875L30.6094 24.5134C30.6696 24.558 30.7433 24.5826 30.8192 24.5826C31.0156 24.5826 31.1763 24.4219 31.1763 24.2254V17.6071H32.6049V34.3929H32.6071Z"
                  fill="#8B8E99"
                />
              </g>
              <defs>
                <clipPath id="clip0_105_4831">
                  <rect
                    width="52"
                    height="52"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </section>
      </div>

      <div className="productInfomation">
        <section className="tabInfoDetail">
          <p className="tproductontent">Description</p>
          <p className="tproductontent">Review</p>
        </section>
        <div className="lineGreyW"></div>
        <section className="contentInfoDetail">
          <div className="decriptionInfoDetail">
            <p className="titleInfoDetail">Description</p>
            <p className="contentDecriptionInfoDetail">
              The most powerful MacBook Pro ever is here. With the b lazing-fast
              M1 Pro or M1 Max
              <br />
              chip — the first Apple silicon designed for pros — you get
              groundbreaking performance
              <br /> and amazing battery life. Add to that a stunning Liquid
              Retina XDR display, the best
              <br /> camera and audio ever in a Mac notebook, and all the ports
              you need. The first notebook
              <br />
              of its kind, this MacBook Pro is a beast. M1 Pro takes the
              <br /> exceptional performance of the M1 architecture to a whole
              new level for pro users.
            </p>
            <p className="contentDecriptionInfoDetail">
              Even the most ambitious projects are easily handled with up to 10
              CPU cores, up to 16
              <br /> GPU cores, a 16‑core Neural Engine, and dedicated encode
              and decode media engines
              <br /> that support H.264, HEVC, and ProRes codecs.
            </p>
          </div>
          <div className="featureInfoDetail">
            <p className="titleInfoDetail">Feature</p>
            <main className="featureContainer">
              <h4 className="featureContent">
                <PiMedalDuotone className="iconFeatureContainer" />
                <span className="contentFeature">Free 1 Year Warranty</span>
              </h4>
              <h4 className="featureContent">
                <BsTruck className="iconFeatureContainer" />{" "}
                <span className="contentFeature">
                  Free Shipping & Fasted Delivery
                </span>
              </h4>
              <h4 className="featureContent">
                <PiHandshakeLight className="iconFeatureContainer" />
                <span className="contentFeature">
                  100% Money-back guarantee
                </span>
              </h4>
              <h4 className="featureContent">
                <PiHeadphonesLight className="iconFeatureContainer" />
                <span className="contentFeature">24/7 Customer support</span>
              </h4>
              <h4 className="featureContent">
                <PiCreditCardLight className="iconFeatureContainer" />
                <span className="contentFeature">Secure payment method</span>
              </h4>
            </main>
          </div>
          <div className="lineGreyH"></div>
          <div className="shippingInfoDetai">
            <p className="titleInfoDetail">Shipping Information</p>
            <main className="shippingContainer">
              <h4 className="shippingContent">
                <span className="textShippingContainer">
                  Courier:
                  <span className="contentshipping">
                    {" "}
                    2 - 4 days, free shipping
                  </span>{" "}
                </span>
              </h4>
              <h4 className="shippingContent">
                <span className="textShippingContainer">
                  Local Shipping:{" "}
                  <span className="contentshipping">
                    {" "}
                    up to one week, $19.00
                  </span>
                </span>
              </h4>
              <h4 className="shippingContent">
                <span className="textShippingContainer">
                  UPS Ground Shipping:{" "}
                  <span className="contentshipping"> 4 - 6 days, $29.00</span>{" "}
                </span>
              </h4>
              <h4 className="shippingContent">
                <span className="textShippingContainer">
                  Unishop Global Export:{" "}
                  <span className="contentshipping"> 3 - 4 days, $39.00</span>
                </span>
              </h4>
            </main>
          </div>
        </section>
      </div>
    </>
  );
}

export default Detail;
