import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function SocialLogin() {
  return (
    <div>
      <h2 className="font-semibold">Login With</h2>
      <div className="mt-2">
        <button className="btn btn-outline w-full my-1 text-[#4285F4]">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full my-1">
          <FaGithub />
          Login with GitHub
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
