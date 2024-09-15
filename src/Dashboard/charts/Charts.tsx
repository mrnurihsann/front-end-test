import React from "react";

function Charts() {
  const data = [
    { name: "Theresa Webb", value: 134 },
    { name: "Darlene Robertson", value: 122 },
    { name: "Annette Black", value: 111 },
    { name: "Jacob Jones", value: 108 },
    { name: "Brooklyn Simmons", value: 99 },
  ];

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Top Request</h2>
        <div className="flex space-x-4">
          <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-700">
            Month
          </button>
          <button className="bg-bluecustom px-4 py-2 rounded-md text-white">
            Year
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        {data.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700">{item.name}</span>
              <span className="text-gray-700">{item.value}</span>
            </div>

            <div className="relative w-full bg-gray-200 rounded-full h-4">
              <div
                className="absolute top-0 left-0 h-4 bg-bluecustom rounded-full"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <div className="text-gray-500">0</div>
        <div className="text-gray-500">25k</div>
        <div className="text-gray-500">50k</div>
        <div className="text-gray-500">75k</div>
        <div className="text-gray-500">150k</div>
      </div>
    </div>
  );
}

export default Charts;
