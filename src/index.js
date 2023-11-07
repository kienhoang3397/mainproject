import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { sideProductConfig } from './common/config/configANT';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={'Loading'}>
    <ConfigProvider theme={sideProductConfig}>
      <Provider store={store}>

        <App />




      </Provider>
    </ConfigProvider>
    </Suspense>
   
  </React.StrictMode>
);


