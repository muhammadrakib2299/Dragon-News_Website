import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div>
      <header className="w-9/12 mx-auto py-5">
        <Navbar> </Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default PageLayout;
