import { lazy} from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Content/Layout";

const Home = lazy(() => import("../Pages/Home"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const Blog = lazy(() => import("../Pages/Blog"));
const BlogPage = lazy(() => import("../Pages/BlogPage"));

// 🔹 Router definition
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" replace /> },
        {
          path: "home",
          element: (

              <Home />

          ),
        },
        {
          path: "contact",
          element: (

              <ContactUs />

          ),
        },
        {
          path: "blog",
          element: (

              <Blog />

          ),
        },
        {
          path: "blog/:id",
          element: (

              <BlogPage />

          ),
        },
      ],
    },
  ],
  { basename: "/" }
);
