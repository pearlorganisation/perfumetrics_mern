import React from "react";
import styles from "./styles.module.css";

const CircularProgress = ({
  percent,
  className,
  strokeWidth = "5",
  strokeColor,
}) => {
  return (
    <div className={className}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* <!-- Background circle --> */}
        <circle
          className="text-gray-200 stroke-current"
          stroke-width={strokeWidth}
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/* <!-- Progress circle --> */}
        <circle
          className={`text-indigo-500 ${styles.progress_ring__circle}   stroke-current`}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke-dasharray="251.2"
          stroke-dashoffset={`calc(251.2 - (251.2 * ${percent}) / 100)`}
        ></circle>

        {/* <!-- Center text --> */}
        <text
          x="50"
          y="50"
          font-family="Verdana"
          font-size="12"
          font-weight="bold"
          text-anchor="middle"
          alignment-baseline="middle"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
