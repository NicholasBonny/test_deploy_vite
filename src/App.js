import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/signinPage/signin.page";
import Signup from "./pages/signupPage/signup.page";
import HomeDashboard from "./pages/homePage/home.page";
import ProductDetails from "./pages/productDetalis/productDetails.page";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import State from "./pages/State";
import { ContextProvider } from "./contextApi/myContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeDashboard />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
    {
      path: "/checkout/:id",
      element: <CheckoutPage />,
    },
    {
      path: "signin",
      element: <Signin />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "test",
      element: <State />,
    },
  ]);

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
