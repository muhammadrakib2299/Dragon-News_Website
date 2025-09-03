import logo from "../assets/logo.png";
import moment from "moment";
function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo py-2">
        <img className="w-[350px]" src={logo} alt="" />
      </div>
      <div>
        <h1 className="text-gray-400">Journalism Without Fear or Favour</h1>
      </div>
      <div className="text-gray-400">
        {moment().format("dddd, MMMM Do YYYY")}
      </div>
    </div>
  );
}

export default Header;
