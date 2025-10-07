import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 flex items-center shadow-md sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            CS — Ticket System
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-gray-600">
            <button className="hover:text-gray-900">Home</button>
            <button className="hover:text-gray-900">FAQ</button>
            <button className="hover:text-gray-900">Changelog</button>
            <button className="hover:text-gray-900">Blog</button>
            <button className="hover:text-gray-900">Download</button>
            <button className="hover:text-gray-900">Contact</button>
          </nav>

          <button className="bg-gradient-to-r from-[#6d28d9] to-[#10b981] text-white px-4 py-2 rounded shadow-sm hover:opacity-90 transition">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
