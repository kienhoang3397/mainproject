import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import DashBoard from './pages/DashBoard/DashBoard';
import SidebarDashboard from './common/components/Side/SidebarDashboard/SidebarDashboard';
import UpdateProduct from './common/components/Forms/FormUpdateProduct/FormUpdateProduct';
import FormUpdateProduct from './common/components/Forms/FormUpdateProduct/FormUpdateProduct';

import MainLayout from './common/layouts/MainLayouts/MainLayout';
import Detail from './pages/Product/Details/Detai';
import MainLayoutSecond from './common/layouts/MainLayouts/MainLayoutSecond';
import Profile from './pages/Profile/Profile';
import UserLayout from './common/layouts/MainLayouts/UserLayout';
import Test from './assets/Test';
import UserDashBoard from './common/components/UserDashBoard/UserDashBoard';
import WishList from './pages/WishList/WishList';
import OrderHistory from './pages/OrderHistory/OrderHistory';

const FormAddDashBoard = React.lazy(() => import('./common/components/Forms/FormAddDashBoard/FormAddDashBoard'));
const RegPage = React.lazy(() => import('./pages/Login/RegPage/RegPage'));
const ContactPage = React.lazy(() => import('./pages/Contact/ContactPage'));
const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const AboutPage = React.lazy(() => import('./pages/About/AboutPage'));
const LoginPage = React.lazy(() => import('./pages/Login/LoginPage/Login'));
const ProductPage = React.lazy(() => import('./pages/Product/ProductPage/ProductPage'));

const CartPage = React.lazy(() => import('./pages/Cart/CartPage'));

export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="shoppingcart" element={<CartPage />} />
    </Route>
    <Route path="/" element={<MainLayoutSecond />}>
      <Route path="home" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="login" element={<LoginPage />}>
        <Route path="register" element={<RegPage />} />
      </Route>
      <Route path="register" element={<RegPage />} />
      <Route path="product" element={<ProductPage />} />
     
      <Route path="product/:productId" element={<Detail />} />
      <Route path="wishlist" element={<WishList />} />
    </Route>




    <Route path='/user' element={<UserLayout />}>
      <Route path="profile" element={<Profile />} />
      <Route path='logout' element={<Test />} />
      <Route path="ortherhistory" element={<OrderHistory />} />
      <Route path='dashboarduser' element={<UserDashBoard />}>

        <Route path="user/profile" element={<Profile />} />
      </Route>
      <Route path='wishlist' element={<WishList />} />
    </Route>


    <Route path="/dashboard" element={<SidebarDashboard />}>
      <Route index element={<DashBoard />} />
      <Route path="maindashboard" element={<DashBoard />} />
      <Route path="add" element={<FormAddDashBoard />} />
      <Route path="maindashboard/add2/:id" element={<UpdateProduct />} />
    </Route>
  </>
));
