import React from "react";
import "./App.css";
import "./i18n"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import BuyAccount from "./pages/buy_account/buy_account.jsx";
import BuyAccount2 from "./pages/buy_account2/buy_account2.jsx";
import Frame5 from "./pages/frame5/frame5.jsx";
import Frame6 from "./pages/frame6/frame6.jsx";
import Frame20 from "./pages/frame20/frame20.jsx";
import Frame21 from "./pages/frame21/frame21.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <BuyAccount /> },
      { path: "buy_account", element: <BuyAccount /> },
      { path: "buy_account2", element: <BuyAccount2 /> },
      { path: "frame5", element: <Frame5 /> },
      { path: "frame6", element: <Frame6 /> },
      { path: "frame20", element: <Frame20 /> },
      { path: "frame21", element: <Frame21 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
