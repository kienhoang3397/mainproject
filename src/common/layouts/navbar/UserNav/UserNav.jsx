import React, { useEffect, useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { productsFetch } from "../../../../redux/slice/productApiSlice";
import store from "../../../../redux/store";
import "./UserNav.css";
import { logoutUser } from "../../../../redux/slice/userApiSlice";

function UserNav() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login.currentUser);

const accessToken = useSelector((state) => state.userApi.user?.accessToken);
const id = useSelector((state) => state.infoUserApi.user?._id);


  useEffect(() => {
    store.dispatch(productsFetch());
  }, []);

  const handleLogOut = () => {
    dispatch(logoutUser({ id, accessToken }));
    navigate("/"); 
  };

  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  const handleConfirmLogout = () => {
    handleLogOut();
    setShowConfirmation(false);
  };

  return (
    <div className="mainMenuUser">
      <NavLink to={"dashboarduser"} className="menuItemUser">
        <RxDashboard className="menuIconUser" />
        <p className="menuContentUser">Dashboard</p>
      </NavLink>
      <NavLink to={"profile"} className="menuItemUser">
        <AiOutlineUser className="menuIconUser" />
        <p className="menuContentUser">Account Details</p>
      </NavLink>
      <NavLink to={"orderhistory"} className="menuItemUser">
        <AiOutlineClockCircle className="menuIconUser" />
        <p className="menuContentUser">Order History</p>
      </NavLink>
      <NavLink to={"wishlist"} className="menuItemUser">
        <BiHeart className="menuIconUser" />
        <p className="menuContentUser">Wishlist</p>
      </NavLink>
      <NavLink to={"/shoppingcart"} className="menuItemUser">
        <AiOutlineShoppingCart className="menuIconUser" />
        <p className="menuContentUser">Shopping Cart</p>
      </NavLink>

      <div className="menuItemUser" onClick={handleLogoutClick}>
        <FiLogOut className="menuIconUser" />
        <p className="menuContentUser">Log Out</p>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="confirmationDialog">
          <p className="contentDialog">ARE YOU SURE WANT TO LOGOUT ?</p>
          <section className="containerBtnDiaLog">
            <button className="btnDialogOk" onClick={handleConfirmLogout}>
              Yes
            </button>
            <button className="btnDialogNo" onClick={handleCancelLogout}>
              No
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default UserNav;
