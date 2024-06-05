import Navbar from "./components/navbar/Navbar";

import HomePage from "./routes/HomePage/HomePage";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";
import Login from "./routes/login/Login";

import Register from "./routes/register/Register";
import ProfilePage from "./routes/profilePage/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
