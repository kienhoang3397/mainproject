import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const UpdateProduct = React.lazy(() =>
  import("./common/components/Forms/FormUpdateProduct/FormUpdateProduct")
);
const SidebarDashboard = React.lazy(() =>
  import("./common/components/Side/SidebarDashboard/SidebarDashboard")
);
const DashBoard = React.lazy(() => import("./pages/DashBoard/DashBoard"));
const Test = React.lazy(() => import("./assets/Test"));
const UserDashBoard = React.lazy(() =>
  import("./common/components/UserDashBoard/UserDashBoard")
);
const MainLayout = React.lazy(() =>
  import("./common/layouts/MainLayouts/MainLayout/MainLayout")
);
const MainLayoutSecond = React.lazy(() =>
  import("./common/layouts/MainLayouts/MainLayoutSecond")
);
const UserLayout = React.lazy(() =>
  import("./common/layouts/MainLayouts/UserLayout/UserLayout")
);
const OrderHistory = React.lazy(() =>
  import("./pages/OrderHistory/OrderHistory")
);
const Detail = React.lazy(() => import("./pages/Product/Details/Detai"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const WishList = React.lazy(() => import("./pages/WishList/WishList"));
const FormAddDashBoard = React.lazy(() =>
  import("./common/components/Forms/FormAddDashBoard/FormAddDashBoard")
);
const RegPage = React.lazy(() => import("./pages/Login/RegPage/RegPage"));
const ContactPage = React.lazy(() => import("./pages/Contact/ContactPage"));
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const AboutPage = React.lazy(() => import("./pages/About/AboutPage"));
const LoginPage = React.lazy(() => import("./pages/Login/LoginPage/Login"));
const ProductPage = React.lazy(() =>
  import("./pages/Product/ProductPage/ProductPage")
);

const CartPage = React.lazy(() => import("./pages/Cart/CartPage"));

export const router = createBrowserRouter(
  createRoutesFromElements(
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

      <Route path="/user" element={<UserLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="logout" element={<Test />} />
        <Route path="orderhistory" element={<OrderHistory />} />
        <Route path="dashboarduser" element={<UserDashBoard />}>
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="wishlist" element={<WishList />} />
      </Route>

      <Route path="/dashboard" element={<SidebarDashboard />}>
        <Route index element={<DashBoard />} />
        <Route path="maindashboard" element={<DashBoard />} />
        <Route path="add" element={<FormAddDashBoard />} />
        <Route
          path="maindashboard/add2/:productDashBoardId"
          element={<UpdateProduct />}
        />
      </Route>
    </>
  )
);
