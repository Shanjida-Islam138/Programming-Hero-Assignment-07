import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        <h1 className="text-xl font-bold text-black cursor-pointer">
          CS — Ticket System
        </h1>


        <div className="flex items-center gap-5">
          <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
            <button className="hover:text-indigo-700 transition">Home</button>
            <button className="hover:text-indigo-700 transition">FAQ</button>
            <button className="hover:text-indigo-700 transition">Changelog</button>
            <button className="hover:text-indigo-700 transition">Blog</button>
            <button className="hover:text-indigo-700 transition">Contact</button>
          </nav>

          <button className="bg-gradient-to-r from-indigo-600 to-emerald-500 text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 transition">
            + New Ticket
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;