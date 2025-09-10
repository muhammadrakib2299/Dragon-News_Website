import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center px-4">
      <Toaster position="top-right" reverseOrder={false} />

      <div>{user && user.email}</div>

      <div className="nav space-x-4">
        <Link to="/">Home</Link>
        <Link to="/pages/career">Career</Link>
        <Link to="/pages/about">About</Link>
      </div>

      <div className="flex items-center space-x-4">
        <img src={userIcon} alt="User" />

        {user && user.email ? (
          <button
            onClick={() => {
              logoutUser();
              toast.success("Logout Successfully");
            }}
            className="btn btn-neutral rounded px-6"
          >
            Log out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
