import React from "react";

const SkeletonLoading = ({ height, width, radius, className }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        height: height,
        width: width || "100%",
        borderRadius: radius,
      }}
    ></div>
  );
};

export default SkeletonLoading;
