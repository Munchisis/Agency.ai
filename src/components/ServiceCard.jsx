/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(0.7)}
      onMouseLeave={() => setOpacity(0)}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
    >
      {/* The Glow Effect */}
      <div
        className="pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten"
        style={{
          top: position.y - 150,
          left: position.x - 150,
          opacity: opacity,
        }}
      />

      <div className="flex items-center gap-10 p-8 hover:p-7.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            src={service.icon}
            alt=""
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white">
            {service.title}
          </h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
