import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const { inProgress, resolved } = useContext(AppContext);

  return (
    <section className="px-10 py-14 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <h2 className="text-2xl font-semibold mb-10 text-center">
        Ticket Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* In Progress */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-lg font-medium mb-2">In-Progress</h3>
          <p className="text-4xl font-bold">{inProgress.length}</p>
        </div>

        {/* Resolved */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-lg font-medium mb-2">Resolved</h3>
          <p className="text-4xl font-bold">{resolved.length}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
