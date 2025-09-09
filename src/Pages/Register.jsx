import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="text-center text-2xl mt-20">
      <div className="flex min-h-[calc(100vh-300px)] justify-center items-center">
        <motion.div
          className="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="card-body py-10 px-12">
              <h2 className="text-2xl text-center pb-5 font-semibold">
                Register your account
              </h2>
              <fieldset className="fieldset">
                <label className="label">Your Name</label>
                <input
                  type="text pt-2"
                  className="input w-full"
                  placeholder="Enter your name"
                />

                <label className="label pt-2">Photo URL</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter photo URL"
                />

                <label className="label pt-2">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Enter your email address"
                />

                <label className="label pt-2">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                />

                <label className="label pt-3">
                  <input type="checkbox" className="checkbox mr-2" />
                  Accept Terms & Conditions
                </label>

                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <div>
                <p className="text-center pt-2">
                  Already have an account?{" "}
                  <Link
                    to="/auth/login"
                    className="text-blue-600 font-semibold link link-hover"
                  >
                    Login
                  </Link>
                </p>
              </div>
              <div className="divider">OR</div>
              <div className="text-center">
                <button className="btn btn-outline btn-secondary w-full">
                  Register with Google
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
