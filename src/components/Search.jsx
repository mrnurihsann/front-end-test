import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconGrid from "../assets/grid.svg";
import IconList from "../assets/menu.svg";

const Search = () => {
  return (
    <section className="mx-auto flex">
      <form className="mt-3 w-full max-w-md">
        <div className="relative mb-3">
          <input
            type="search"
            className="w-full px-10 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            id="search"
            placeholder="Search blogs..."
            aria-label="Search"
          />

          <span className="absolute left-3 top-2.5 text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </form>

      <div className="border mt-3 ml-4 mb-3 rounded flex items-center">
        <button
          className="p-2 bg-yellowcustom hover:bg-yellow-700"
          type="button"
        >
          <img src={IconGrid} alt="Grid Icon" className="w-6 h-6" />
        </button>

        <button className="p-2 hover:bg-gray-100" type="button">
          <img src={IconList} alt="Menu Icon" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Search;
