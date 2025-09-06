import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/Layout-Components/LeftNavbar";
import RightNavbar from "../Components/Layout-Components/RightNavbar";
import { Outlet } from "react-router-dom";
import MainLayout from "../Components/Layout-Components/MainLayout";

function HomeLayout() {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto py-5">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-10/12 mx-auto py-2">
          <Navbar></Navbar>
        </nav>
      </header>
      <nav></nav>
      <main className="w-10/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="main col-span-6">
          <h1 className="font-semibold">Category News</h1>
          <MainLayout></MainLayout>
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
}

export default HomeLayout;
