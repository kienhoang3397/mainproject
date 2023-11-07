import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Routes } from 'react-router-dom';
import MainLayout from './common/layouts/MainLayout';

const ContactPage = React.lazy(() => import('./pages/Contact/ContactPage'));
const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const AboutPage = React.lazy(() => import('./pages/About/AboutPage'));
const LoginPage = React.lazy(() => import('./pages/Login/LoginPage/Login'));
const ProductPage = React.lazy(() => import('./pages/Product/ProductPage/ProductPage'));
const Detail = React.lazy(() => import('./pages/Product/Details/Detai'));
const CartPage = React.lazy(() => import('./pages/Cart/CartPage'));

export const router = createBrowserRouter(createRoutesFromElements(

    <Route
      path="/"
      element={<MainLayout />}>
      <Route
        index // Set this route as the default route
        element={<HomePage />} />
      <Route
        path="home"
        element={<HomePage />} />
      <Route
        path="about"
        element={<AboutPage />} />
      <Route
        path="login"
        element={<LoginPage />} 
        />
        
      <Route
        path="product"
        element={<ProductPage />} />
      <Route
        path="product/:productId" // Use a colon to indicate a dynamic parameter
        element={<Detail />} />
      <Route
        path="shoppingcart"
        element={<CartPage />} />
    </Route>

)
  
);


