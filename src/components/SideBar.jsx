import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faThumbsUp,
  faComment,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import ProfileFirst from "../assets/profileSide1.png";
import ProfileSecond from "../assets/profileSide2.png";

const SideBar = () => {
  return (
    <div className="right-content w-3/2 pl-3">
      <h6 className="text-lg font-semibold mb-2">Recommended Tags</h6>

      <div className="flex space-x-3 mb-3">
        <p className="bg-gray-200 rounded px-2 py-1">Mental Health</p>
        <p className="bg-gray-200 rounded px-2 py-1">Software Development</p>
      </div>

      <div className="flex space-x-3 mb-3">
        <p className="bg-gray-200 rounded px-2 py-1">Start Up</p>
        <p className="bg-gray-200 rounded px-2 py-1">Education</p>
        <p className="bg-gray-200 rounded px-2 py-1">Politic</p>
      </div>

      <div>
        <h6 className="text-lg font-semibold mb-2">Recently Saved</h6>

        <div className="flex items-center space-x-3 mb-2">
          <img
            src={ProfileFirst}
            className="w-8 h-8 rounded-full"
            alt="Profile"
          />
          <p className="text-sm">Wade Warren</p>
        </div>
        <h6 className="font-bold mb-1">
          You are Using ChatGPT Wrong! — #1 Mistake 99% of Users Make
        </h6>
        <div className="flex items-center text-gray-600 mb-1">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
          <span>Jun 15, 08:30:04</span>
          <div className="flex items-center ml-4 mr-4">
            <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
            <span>346</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faComment} className="mr-1" />
            <span>23</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 mb-2 pt-8">
          <img
            src={ProfileSecond}
            className="w-8 h-8 rounded-full"
            alt="Profile"
          />
          <p className="text-sm">Kristin Watson</p>
        </div>
        <h6 className="font-bold mb-1">
          BlackBerry failed because it was stubborn. Apple could be next.
        </h6>
        <div className="flex items-center text-gray-600 mb-1">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
          <span>Jun 15, 08:30:04</span>
          <div className="flex items-center ml-4 mr-4">
            <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
            <span>346</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faComment} className="mr-1" />
            <span>23</span>
          </div>
        </div>

        <button className="bg-gray-50 border border-gray-300 w-full py-2 mt-3 flex items-center justify-between p-4">
          <span>See All</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
