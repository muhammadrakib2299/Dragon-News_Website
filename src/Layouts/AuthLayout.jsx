import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function AuthLayout() {
  return (
    <div>
      <div className="bg-[#F3F3F3] min-h-screen pt-5">
        <header className="w-9/12 mx-auto py-2">
          <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default AuthLayout;
