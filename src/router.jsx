import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Routes } from 'react-router-dom';
import MainLayout from './common/layouts/MainLayout';
import DashBoard from './pages/DashBoard/DashBoard';
import SidebarDashboard from './common/components/Side/SidebarDashboard/SidebarDashboard';
import UpdateProduct from './common/components/Forms/FormUpdateProduct/FormUpdateProduct';
import FormUpdateProduct from './common/components/Forms/FormUpdateProduct/FormUpdateProduct';
import Profile from './pages/Profile/Profile';


const FormAddDashBoard = React.lazy(() => import('./common/components/Forms/FormAddDashBoard/FormAddDashBoard'))
const RegPage = React.lazy(() => import('./pages/Login/RegPage/RegPage'))
const ContactPage = React.lazy(() => import('./pages/Contact/ContactPage'));
const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const AboutPage = React.lazy(() => import('./pages/About/AboutPage'));
const LoginPage = React.lazy(() => import('./pages/Login/LoginPage/Login'));
const ProductPage = React.lazy(() => import('./pages/Product/ProductPage/ProductPage'));
const Detail = React.lazy(() => import('./pages/Product/Details/Detai'));
const CartPage = React.lazy(() => import('./pages/Cart/CartPage'));

export const router = createBrowserRouter(createRoutesFromElements(
  <>

    <Route
      path="/"
      element={<MainLayout />}>
      <Route
        index
        element={<HomePage />} />
      <Route
        path="home"
        element={<HomePage />} />
      <Route
        path="about"
        element={<AboutPage />} />
      <Route
        path="contact"
        element={<ContactPage />} />
      <Route
        path="login"
        element={<LoginPage />}
      />
      <Route
        path="register"
        element={<RegPage />}
      />
       <Route
        path="profile"
        element={<Profile />}
      />

      <Route
        path="product"
        element={<ProductPage />} />
      <Route
        path="product/:productId"
        element={<Detail />} />
      <Route
        path="shoppingcart"
        element={<CartPage />} />

    </Route>,
    <Route
      path="/dashboard"
      element={<SidebarDashboard />}>
      <Route
        index
        element={<DashBoard />} />
      <Route
        path="maindashboard"
        element={<DashBoard />}>

      </Route>


      <Route path='add' element={<FormAddDashBoard />} />

      <Route path='maindashboard/add2/:id' element={<UpdateProduct />} />

      {/* <Route path='updateproduct' element={<UpdateProduct />}/> */}
    </Route>

  </>



)

);


