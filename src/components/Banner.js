import React from "react";

const Banner = () => {
  return (
    <div className="hero flex items-center relative h-screen">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
      <div className="page-container text-white text-center z-10 relative">
        <h5 className="font-bold text-8xl mb-6 tracking-[8px]">
          New Season Arrivals
        </h5>
        <p className="text-3xl font-light italic tracking-[3px]">
          Check out all the trends
        </p>
      </div>
    </div>
  );
};

export default Banner;
