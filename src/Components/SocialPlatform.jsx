import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function SocialPlatform() {
  return (
    <div>
      <h2 className="font-semibold">Find Us On</h2>
      <div className="flex flex-col gap-3 mt-3">
        <div className="btn justify-start">
          <Link
            className="flex items-center"
            target="0_blank"
            to="https://www.facebook.com/"
          >
            <FaFacebookF className="mr-1 text-[#1877F2]" /> Facebook
          </Link>
        </div>
        <div className="btn justify-start">
          <Link className="flex items-center" to="https://www.twitter.com/">
            <FaTwitter className="mr-1 text-[#1da1f2]" /> Twitter
          </Link>
        </div>
        <div className="btn justify-start ">
          <Link className="flex items-center" to="https://www.instagram.com/">
            <FaInstagram className="mr-1 text-[#FA7E1E]" /> Instagram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialPlatform;
