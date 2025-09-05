import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function LatestNews() {
  return (
    <div className="flex items-center gap-2 bg-gray-200">
      <p className="bg-[#D72050] text-base-100 px-4 py-3">Latest</p>
      <Marquee className="space-x-10" speed={50} pauseOnHover={true}>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          tenetur maxime molestias quidem atque laboriosam quibusdam.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          tenetur maxime molestias quidem atque laboriosam quibusdam.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          tenetur maxime molestias quidem atque laboriosam quibusdam.
        </Link>
      </Marquee>
    </div>
  );
}

export default LatestNews;
