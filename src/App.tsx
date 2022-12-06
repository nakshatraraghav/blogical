import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useState } from "react";

import "./styles/App.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: loggedIn ? <Layout /> : <Navigate to={"login"} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
