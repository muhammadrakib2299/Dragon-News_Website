import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div>
      <Navbar> </Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default PageLayout;
