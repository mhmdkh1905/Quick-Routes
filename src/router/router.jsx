import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Profile from "../pages/Profile.jsx";
import RootLayout from "../layouts/RootLayout.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
