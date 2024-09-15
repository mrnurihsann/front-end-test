import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const categories = [
  { id: 1, name: "All Topics" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Education" },
  { id: 4, name: "Data Science" },
];

const CategorySelection = () => {
  return (
    <div className="p-6">
      <div className="flex space-x-4 -ml-2">
        {" "}
        <div className="flex items-center text-black cursor-pointer">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative cursor-pointer ${
              category.name === "Technology"
                ? "text-black font-bold"
                : "text-gray-700"
            }`}
          >
            {category.name}

            {category.name === "Technology" && (
              <div className="absolute left-0 right-0 bottom-0 mt-4 h-1 bg-yellow-500" />
            )}
          </div>
        ))}
      </div>
      <hr className="w-[800px]" />
    </div>
  );
};

export default CategorySelection;
