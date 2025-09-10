import React from "react";

// Image imports (replace with your actual image paths or URLs)
import swimmingImg from "../assets/swimming.jpg";
import classImg from "../assets/class.jpg";
import playgroundImg from "../assets/playground.jpg";

const activities = [
  { id: 1, title: "Swimming", image: swimmingImg },
  { id: 2, title: "Class", image: classImg },
  { id: 3, title: "Play Ground", image: playgroundImg },
];

const QZone = () => {
  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-gray-100 rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded shadow overflow-hidden"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-2 text-center font-medium">{activity.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QZone;
