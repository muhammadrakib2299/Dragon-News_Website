import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function PageLayout() {
  return (
    <div>
      <header className="w-9/12 mx-auto py-5">
        <Header></Header>
        <div className="mt-4">
          <Navbar> </Navbar>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default PageLayout;
