import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import {
  PiCreditCardLight,
  PiHandshakeLight,
  PiHeadphonesLight,
  PiMedalDuotone,
} from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Btn from "../../../common/components/Buttons/Button";
import DetailSlide from "../../../common/components/Sliders/Detail/DetailSlider";
import { addToCart } from "../../../redux/slice/cartApiSlice";
import { fetchUser } from "../../../redux/slice/userApiSlice";
import { addTowishlist } from "../../../redux/slice/wishlistApiSlice";
import "./Detail.css";
import { fetchUserInfo } from "../../../redux/slice/infoUserSlice";

function Detail() {
  const [toggle, setToogle] = useState(1);
  const { productId } = useParams();
  const productList = useSelector((state) => state.productsApi?.product?.items);
  const product = productList.find((prod) => prod._id === productId);
  const token = useSelector((state) => state.userApi.user.accessToken);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const quantity = 1;

    dispatch(addToCart({ productId, quantity, token }))
      .then(() => {
        dispatch(fetchUserInfo(token));
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  const handleAddToWishList = () => {
    dispatch(addTowishlist({ productId, token }))
      .then(() => {
        dispatch(fetchUserInfo(token));
      })
      .catch((error) => {
        console.error("Error adding to wishlist:", error);
      });
  };
  function updateToogle(id) {
    setToogle(id);
  }
  return (
    <section className="containerDetail">
      <div className="detailContainer">
        <DetailSlide
          image1={product?.image1}
          image2={product?.image2}
          image3={product?.image3}
          image4={product.image4}
          image5={product?.image1}
          image6={product?.image2}
        />

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
              <div className="badge">25% OFF</div>
            </section>
          </section>

          <div className="btnDetail">
            <Btn
              defaultValue
              content={" Add to Cart"}
              handleBtn={() => handleAddToCart(product._id, 1)}
            ></Btn>
            <section className="heartcontainer">
              <FaHeart
                onClick={() => handleAddToWishList(product._id, 1)}
                className="heart"
              />
            </section>
          </div>
        </section>
      </div>

      <div className="productInfomation">
        <section className="tabInfoDetail">
          <p
            className={
              toggle === 1 ? "tproductontent active" : "tproductontent"
            }
            onClick={() => updateToogle(1)}
          >
            Description
          </p>
          <p
            className={
              toggle === 2 ? "tproductontent active" : "tproductontent"
            }
            onClick={() => updateToogle(2)}
          >
            Review
          </p>
        </section>

        <section
          className={
            toggle === 1 ? "contentInfoDetail" : "contentInfoDetailHide"
          }
        >
          <section className="infoDetail">
            <div className="decriptionInfoDetail">
              <p className="titleInfoDetail">Description</p>
              <p className="contentDecriptionInfoDetail">{product?.desc1}</p>
              <p className="contentDecriptionInfoDetail">{product?.desc2}</p>
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
        </section>
        <section
          className={
            toggle === 2 ? "contentInfoDetail" : "contentInfoDetailHide"
          }
        >
          <section className="detailFeedback">
            <div className="userDetail">
              <section className="userDetailHeading">
                <img
                  className="imgUserDetail"
                  src="https://camerabox.vn/uploads/news/2018_07/chup-anh-phong-canh-thu-vi.jpg"
                  alt=""
                />
                <div className="userInfo">
                  <section className="userRating">
                    <div className="userInfoTop">
                      <p>Dianne Russell</p>
                      <p className="userInfoTopSpan">&#8226;</p>
                      <p className="userInfoTopSpan">Just Now</p>
                    </div>
                    <div className="userInfoBottom">
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                    </div>
                  </section>
                </div>
              </section>
              <section className="contentUserDetail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis
                dignissim arcu, sit amet consequat sem auctor a.
              </section>
            </div>
            <div className="userDetail">
              <section className="userDetailHeading">
                <img
                  className="imgUserDetail"
                  src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
                  alt=""
                />
                <div className="userInfo">
                  <section className="userRating">
                    <div className="userInfoTop">
                      <p>Courtney Henry</p>
                      <p className="userInfoTopSpan">&#8226;</p>
                      <p className="userInfoTopSpan">2 mins ago</p>
                    </div>
                    <div className="userInfoBottom">
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                    </div>
                  </section>
                </div>
              </section>
              <section className="contentUserDetail">
                In eu tortor viverra, tempor odio ac, pretium diam.
              </section>
            </div>
            <div className="userDetail">
              <section className="userDetailHeading">
                <img
                  className="imgUserDetail"
                  src="https://media.istockphoto.com/id/517188688/vi/anh/phong-c%E1%BA%A3nh-n%C3%BAi-non.jpg?s=612x612&w=0&k=20&c=WWWaejSo6EWGZMZSK7QK6LCfwd0rL2KB3ImCX2VkW4A="
                  alt=""
                />
                <div className="userInfo">
                  <section className="userRating">
                    <div className="userInfoTop">
                      <p>Darrell Steward</p>
                      <p className="userInfoTopSpan">&#8226;</p>
                      <p className="userInfoTopSpan">21 mins ago</p>
                    </div>
                    <div className="userInfoBottom">
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                    </div>
                  </section>
                </div>
              </section>
              <section className="contentUserDetail">
                Vivamus fermentum consectetur ligula vel tristique. Nulla nec
                quam ultricies, bibendum sem quis, sollicitudin quam. In gravida
                tempor faucibus. Curabitur at accumsan eros. Suspendisse cursus
                velit non metus posuere, quis rhoncus velit volutpat. Proin
                accumsan egestas pharetra.
              </section>
            </div>
            <div className="userDetail">
              <section className="userDetailHeading">
                <img
                  className="imgUserDetail"
                  src="https://media.istockphoto.com/id/517188688/vi/anh/phong-c%E1%BA%A3nh-n%C3%BAi-non.jpg?s=612x612&w=0&k=20&c=WWWaejSo6EWGZMZSK7QK6LCfwd0rL2KB3ImCX2VkW4A="
                  alt=""
                />
                <div className="userInfo">
                  <section className="userRating">
                    <div className="userInfoTop">
                      <p>Brooklyn Simmons</p>
                      <p className="userInfoTopSpan">&#8226;</p>
                      <p className="userInfoTopSpan">1 hour ago</p>
                    </div>
                    <div className="userInfoBottom">
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                    </div>
                  </section>
                </div>
              </section>
              <section className="contentUserDetail">
                Vestibulum tincidunt blandit odio vel finibus.
              </section>
            </div>
            <div className="userDetail">
              <section className="userDetailHeading">
                <img
                  className="imgUserDetail"
                  src="https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-6.jpg"
                  alt=""
                />
                <div className="userInfo">
                  <section className="userRating">
                    <div className="userInfoTop">
                      <p>Marvin McKinney</p>
                      <p className="userInfoTopSpan">&#8226;</p>
                      <p className="userInfoTopSpan">1 day ago</p>
                    </div>
                    <div className="userInfoBottom">
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                      <AiFillStar className="ratingStar" />
                    </div>
                  </section>
                </div>
              </section>
              <section className="contentUserDetail">I Love this</section>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default Detail;
