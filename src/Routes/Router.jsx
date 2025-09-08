import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import MainLayout from "../Components/Layout-Components/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <MainLayout></MainLayout>,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          );
          const json = await res.json();
          return json.data;
        },
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <h1>Register</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
