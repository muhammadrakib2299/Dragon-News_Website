import React from "react";
import { FaStar, FaRegEye } from "react-icons/fa";
import { motion } from "framer-motion";

function NewCard({ news }) {
  const { author } = news;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl my-5"
    >
      {/* Author Section */}
      <div className="p-4 flex items-center space-x-4">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={author.img}
          alt="Author"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {author.name || "Unknown Author"}
          </p>
          <p className="text-xs text-gray-500">
            {author.published_date?.split(" ")[0]}
          </p>
        </div>
      </div>

      {/* Title and Image */}
      <div className="px-4 pb-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
          {news.title}
        </h2>

        {/* Image Animation */}
        <motion.img
          className="w-full h-80 object-cover rounded-md mb-3"
          src={news.image_url || news.thumbnail_url}
          alt="News Visual"
        />

        {/* Description */}
        <p className="text-sm text-gray-700 line-clamp-3">
          {news.details.slice(0, 150)}...
        </p>

        {/* Footer Section */}
        <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-1 text-orange-500">
            <FaStar />
            <span className="font-medium">{news.rating?.number || "N/A"}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRegEye />
            <span>{news.total_view || 0}</span>
          </div>
        </div>

        {/* Read More Link */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#"
          className="block mt-3 text-sm text-blue-600 hover:underline w-fit"
        >
          Read More
        </motion.a>
      </div>
    </motion.div>
  );
}

export default NewCard;
