import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Content/Layout";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import Blog from "../Pages/Blog";
import BlogPage from "../Pages/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Redirect `/` → `/home`
      { index: true, element: <Navigate to="/home" replace /> },

      // Actual routes
      { path: "home", element: <Home /> },
      { path: "contact", element: <ContactUs /> },
      { path: "blog", element: <Blog /> },
      { path:"blog/:id", element:<BlogPage />}
    ],
  },
],{ basename: "/AyvaTechCLI" });
