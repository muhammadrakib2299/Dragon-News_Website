import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import RightNavbar from "../Components/Layout-Components/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

function NewDetails() {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div>
      <Header />
      {/* Main Content Area */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-5"
      >
        {/* Article Section */}
        <section className="lg:col-span-9 p-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-6 overflow-hidden rounded-md shadow-lg"
          >
            <img
              src={news.image_url || "/placeholder.jpg"}
              alt="News Thumbnail"
              className="w-full h-auto object-cover transition-transform duration-300"
            />
          </motion.div>

          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            {news.title}
          </h2>

          <p className="text-sm text-gray-500 mb-2 line-hight-relaxed">
            {news.details}
          </p>

          <p className="text-gray-700 leading-relaxed">{news.content}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded transition duration-300"
          >
            <Link to="/">← All news in this category</Link>
          </motion.button>
        </section>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3">
          <RightNavbar />
        </aside>
      </motion.main>

      {/* Editors Insight Section */}
      <section className="max-w-screen-xl mx-auto px-10 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Editors Insight
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="border p-4 rounded shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              <img
                src="/wedding-dress-placeholder.jpg"
                alt="Wedding Guest Dress"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="font-semibold text-gray-700 mb-2">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h4>
              <p className="text-sm text-gray-500">Jan 4, 2022</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default NewDetails;
