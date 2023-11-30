import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import {
  AiOutlineClockCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineWallet,
} from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import './UserNav.css';
import { logOutUser } from '../../../../redux/slice/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { BiHeart } from 'react-icons/bi';

function UserNav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth.login.currentUser);
  const user = useSelector((state) => state.auth.login.currentUser);

  const accessToken = user?.accessToken
  const id = user?.user._id

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    logOutUser(dispatch, id, navigate, accessToken)
    setShowConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="mainMenuUser">
      <NavLink to={'dashboarduser'} className="menuItemUser">
        <RxDashboard className="menuIconUser" />
        <p className="menuContentUser">Dashboard</p>
      </NavLink>
      <NavLink to={'profile'} className="menuItemUser">
        <AiOutlineUser className="menuIconUser" />
        <p className="menuContentUser">Account Details</p>
      </NavLink>
      <NavLink to={'ortherhistory'} className="menuItemUser">
        <AiOutlineClockCircle className="menuIconUser" />
        <p className="menuContentUser">Order History</p>
      </NavLink>
      <NavLink to={'wishlist'} className="menuItemUser">
        <BiHeart className="menuIconUser" />
        <p className="menuContentUser">Wishlist</p>
      </NavLink>
      <NavLink to={'/shoppingcart'} className="menuItemUser">
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

          <p>Are you sure you want to log out?</p>
          <button onClick={handleConfirmLogout}>Yes</button>
          <button onClick={handleCancelLogout}>No</button>


        </div>
      )}
    </div>
  );
}

export default UserNav;
