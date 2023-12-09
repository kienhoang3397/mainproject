import React, { useEffect, useState } from 'react';
import {
  AiOutlineClockCircle,
  AiOutlineShoppingCart,
  AiOutlineUser
} from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOutUser } from '../../../../redux/slice/apiRequest';
import './UserNav.css';
import { productsFetch } from '../../../../redux/slice/productApiSlice';
import store from '../../../../redux/store';

function UserNav() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth.login.currentUser);
  const user = useSelector((state) => state.auth.login.currentUser);

  const accessToken = user?.accessToken
  const id = user?.user._id

  
useEffect(() => {
  store.dispatch(productsFetch());
}, []);

  const handleConfirmLogout = () => {
    logOutUser(dispatch, id, navigate, accessToken)
    setShowConfirmation(false);
  };
  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };
  const handleCancelLogout = () => {
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
            <button className="btnDialogOk" onClick={handleLogoutClick}>
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
