// src/components/Banner.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const { inProgressCount, resolvedCount } = useContext(AppContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg p-6 bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow">
          <h3 className="text-sm opacity-90">In-Progress</h3>
          <div className="text-5xl font-bold mt-4">{inProgressCount}</div>
        </div>

        <div className="rounded-lg p-6 bg-gradient-to-r from-teal-500 to-green-600 text-white shadow">
          <h3 className="text-sm opacity-90">Resolved</h3>
          <div className="text-5xl font-bold mt-4">{resolvedCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
