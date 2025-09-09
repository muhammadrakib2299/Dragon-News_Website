import React from "react";
import { motion } from "framer-motion";

function Login() {
  return (
    <div className="flex min-h-[calc(100vh-300px)] justify-center items-center">
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
          <div className="card-body py-10">
            <h2 className="text-2xl text-center pb-5 font-semibold">
              Login your account
            </h2>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label pt-3">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div className="flex justify-between items-center">
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
