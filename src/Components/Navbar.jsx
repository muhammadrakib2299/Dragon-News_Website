import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-4">
      <div className=""></div>
      <div className="nav space-x-4">
        <Link to="/home">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex items-center space-x-2">
        <img src={userIcon} alt="" />
        <button className="btn btn-neutral rounded-none px-5">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
