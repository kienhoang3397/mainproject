import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import MainLayout from './common/layouts/MainLayout';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';


import LoginPage from './pages/Login/Login';
import Detail from './pages/Product/Details/Detai';
import ProductPage from './pages/Product/ProductPage/ProductPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Consider using the layout at the top level
    children: [
      {
        path: 'home', // Initial route for Home (corrected path)
        element: <HomePage />
      },
      {
        path: 'about', // About page
        element: <AboutPage />
      },
      {
        path: 'contact', // Contact page
        element: <ContactPage />
      },
      {
        path: 'login', // Login page
        element: <LoginPage />,
      
        
      },
      {
        path: 'product', // Contact page
        element: <ProductPage/>
      },
      {
        path: ':productId', // Route for individual product detail
        element: <Detail/>
      }
    ]
  }
]);
