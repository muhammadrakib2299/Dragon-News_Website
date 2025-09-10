import React from "react";
import { motion } from "framer-motion";

// Image imports
import swimmingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playgroundImg from "../assets/playground.png";

const activities = [
  { id: 1, image: swimmingImg },
  { id: 2, image: classImg },
  { id: 3, image: playgroundImg },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const QZone = () => {
  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-gray-100 rounded-md shadow">
      <motion.h2
        className="text-xl font-semibold mb-5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Q-Zone
      </motion.h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-white rounded shadow overflow-hidden"
          >
            <img src={activity.image} className="w-full h-45 object-cover" />
            <div className="p-2 text-center font-medium">{activity.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QZone;
