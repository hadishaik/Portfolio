import React from "react";

function Svgs({ no, color, category }) {
  const circumference = 50 * 2 * Math.PI;
  const percent = no;

  return (
    <div className="flex items-center flex-row max-w-md mx-auto shadow-xl rounded-2xl h-30">
      <div className="flex items-center justify-center -m-6 overflow-hidden rounded-full text-white">
        <svg
          className="w-32 h-32 transform translate-x-1 translate-y-1"
          x-cloak="true"
        >
          <circle
            className={` ${color}`}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percent / 100) * circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-white text-xl"
          >
            {no}%
          </text>
        </svg>
      </div>
      <p className="ml-10 font-medium text-white sm:text-xl">{category}</p>
    </div>
  );
}

export default Svgs;
