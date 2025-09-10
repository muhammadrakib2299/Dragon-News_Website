import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import MainLayout from "../Components/Layout-Components/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Career from "../Pages/Career";
import PageLayout from "../Layouts/PageLayout";
import NewDetails from "../Pages/NewDetails";
import PrivateRoutes from "./PrivateRoutes";

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
    path: "/news/:id",
    element: (
      <PrivateRoutes>
        <NewDetails></NewDetails>
      </PrivateRoutes>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
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
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/",
    element: <PageLayout></PageLayout>,
    children: [
      {
        path: "/pages/about",
        element: <About></About>,
      },
      {
        path: "/pages/career",
        element: <Career></Career>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
