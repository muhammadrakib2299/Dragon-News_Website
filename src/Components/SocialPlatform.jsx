import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function SocialPlatform() {
  return (
    <div>
      <h2 className="font-semibold">Find Us On</h2>
      <div className="flex flex-col gap-3 mt-3">
        <div className="btn justify-start">
          <FaFacebookF className="mr-1" /> Facebook
        </div>
        <div className="btn justify-start">
          <FaTwitter className="mr-1" /> Twitter
        </div>
        <div className="btn justify-start">
          <FaInstagram className="mr-1" /> Instagram
        </div>
      </div>
    </div>
  );
}

export default SocialPlatform;
