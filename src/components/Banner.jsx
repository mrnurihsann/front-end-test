import React from "react";
import "./css/Banner.css";

const Banner = (props) => {
  return (
    <div className="frame">
      <div className="frame1">
        <div className="frame2">
          <div className="text">
            <p className="text1">Read Blogs</p>
          </div>
          <div className="text2">
            <p className="text3">
              Displays information, visualizations, graphics, and text with a
              display that is more interesting to explore.
            </p>
          </div>
        </div>
        <div className="instance">
          <div className="text4">
            <p className="text5">Write Blog</p>
          </div>
        </div>
      </div>

      <img
        src="Frame.png"
        alt="frame"
        width={315}
        height={220}
        className="frame3"
      />
    </div>
  );
};

export default Banner;
