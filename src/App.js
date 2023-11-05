
import "./index.css";
import NavSearchProduct from "./common/layouts/navbar/NavSearchProduct/NavSearchProduct";
import ProductListingCard from "./common/components/Cards/ProductListingCard/ProductListingCard";

import ProductListingPage from "./pages/Product/ProductPage/ProductPage";
import { Link, Route, RouterProvider, Switch } from "react-router-dom";
import { router } from "./router";
import Detai from "./pages/Product/Details/Detai";
import Test from "./assets/Test";
import Login from "./pages/Login/Login";
import ProductPage from "./pages/Product/ProductPage/ProductPage";
import RegTest from "./pages/Login/RegTest";
import CartPage from "./pages/Cart/CartPage";
import UserNav from "./common/layouts/navbar/UserNav/UserNav";
import Couter from "./common/components/Buttons/Couter/Couter";

function App() {
  return (
    <>
    <div className="ctn">
    {/* <UserNav/> */}
    {/* <CartPage/> */}

    </div>
      <RouterProvider router={router} />
      {/* <RegTest/> */}
      {/* <Couter/> */}
    
    </>
  )
}

export default App;
