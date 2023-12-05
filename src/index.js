import { ConfigProvider } from "antd";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { sideProductConfig } from "./common/config/configANT";
import "./index.css";
import store from "./redux/store";
import LoadingPage from "./pages/Loading/LoadingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <ConfigProvider theme={sideProductConfig}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </Suspense>
  </React.StrictMode>
);
