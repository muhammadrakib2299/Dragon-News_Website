import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

function HomeLayout() {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-8/12 mx-auto py-5">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-8/12 mx-auto py-2">
          <Navbar></Navbar>
        </nav>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
}

export default HomeLayout;
