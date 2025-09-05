import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

function HomeLayout() {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-8/12 mx-auto py-5">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
}

export default HomeLayout;
