import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import MainLayout from './common/layouts/MainLayout';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';


import LoginPage from './pages/Login/Login';
import Detail from './pages/Product/Details/Detai';
import ProductPage from './pages/Product/ProductPage/ProductPage';
import CartPage from './pages/Cart/CartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true, // Set this route as the default route
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'product',
        element: <ProductPage />
      },
      {
        path: ':productId',
        element: <Detail />
      },
      {
        path: 'shoppingcart',
        element: <CartPage/>
      }

    ]
  }
]);

