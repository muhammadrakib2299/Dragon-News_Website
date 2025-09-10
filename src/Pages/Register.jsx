import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const { CreateNewUser, setUser } = useContext(AuthContext);

  // Handle Form Submit
  const handleRegistration = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // const name = formData.get("name");
    // const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");
    // See in console
    // console.log(name, photo, email, password);

    // send data to firebase
    CreateNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // reset form
        event.target.reset();
        toast.success("User has been Registration successfully");
      })
      .catch(() => {
        toast.error("Something went wrong, Please try again");
      });
  };

  return (
    <div className="text-center text-2xl mt-10">
      <div className="flex min-h-[calc(100vh-300px)] justify-center items-center">
        <Toaster position="top-right" reverseOrder={false} />
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
            <form
              onSubmit={handleRegistration}
              className="card-body py-8 px-10"
            >
              <h2 className="text-2xl text-center pb-5 font-semibold">
                Register your account
              </h2>
              <fieldset className="fieldset">
                <label className="label">Your Name</label>
                <input
                  name="name"
                  type="text pt-2"
                  className="input w-full"
                  placeholder="Enter your name"
                  required
                />

                <label className="label pt-2">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input w-full"
                  placeholder="Enter photo URL"
                  required
                />

                <label className="label pt-2">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Enter your email address"
                  required
                />

                <label className="label pt-2">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                  required
                />

                <label className="label pt-3">
                  <input type="checkbox" className="checkbox mr-2" required />
                  Accept Terms & Conditions
                </label>

                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <div className="flex justify-between mt-2 px-2">
                <span>Already have an account? </span>
                <Link
                  to="/auth/login"
                  className="text-blue-600 font-semibold link link-hover"
                >
                  Login
                </Link>
              </div>
              <div className="divider">OR</div>
              <div className="text-center">
                <button className="btn btn-outline btn-secondary w-full">
                  Register with Google
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
