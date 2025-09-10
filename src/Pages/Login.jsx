import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

function Login() {
  const { LoginUser, setUser } = useContext(AuthContext);

  // Handle Form Submit
  const HandleLoginSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    //login user
    LoginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        event.target.reset();
        alert("User has been logged in successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex min-h-[calc(100vh-300px)] justify-center items-center mt-20">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <form onSubmit={HandleLoginSubmit} className="card-body py-10">
            <h2 className="text-2xl text-center pb-5 font-semibold">
              Login your account
            </h2>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label pt-3">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div className="flex justify-between items-center">
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div>
              <p className="text-center">
                New to Dragon News?{" "}
                <Link
                  to="/auth/register"
                  className="text-blue-600 font-semibold link link-hover"
                >
                  Register
                </Link>
              </p>
            </div>
            <div className="divider">OR</div>
            <div className="text-center">
              <button className="btn btn-outline btn-secondary w-full">
                Login with Google
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
