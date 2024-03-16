import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Shop from "./Components/Pages/Shop.jsx";
import Cart from "./Components/Pages/Cart.jsx";
import ShopCatergory from "./Components/Pages/ShopCatergory.jsx";
import Products from "./Components/Pages/Products.jsx";
import Login from "./Components/Pages/Login.jsx";
import ContaxtProvider from "./Components/Context/Context.jsx";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shopcatergory",
        element: <ShopCatergory />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: ":productId",
            element: <Products />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/men",
        element: <ShopCatergory banner={men_banner} category="men" />,
      },
      {
        path: "/kids",
        element: <ShopCatergory banner={kids_banner} category="kid" />,
      },
      {
        path: "/women",
        element: <ShopCatergory banner={women_banner} category="women" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContaxtProvider>
    <RouterProvider router={router} />
  </ContaxtProvider>
);

// createRoutesFromElements(
//   <Route path="/" element={<App />}>
//     <Route path="" element={<Shop />} />
//     <Route path="/cart" element={<Cart />} />
//     <Route path="/shopcatergory" element={<ShopCatergory />} />
//     <Route path="/products" element={<Products />}>
//       <Route path=":productId" element={<Products />} />
//     </Route>
//     <Route path="/login" element={<Login />} />
//     <Route
//       path="/men"
//       element={<ShopCatergory banner={men_banner} category="men" />}
//     />
//     <Route
//       path="/kids"
//       element={<ShopCatergory banner={kids_banner} category="kid" />}
//     />
//     <Route
//       path="/women"
//       element={<ShopCatergory banner={women_banner} category="women" />}
//     />
//   </Route>
// )
