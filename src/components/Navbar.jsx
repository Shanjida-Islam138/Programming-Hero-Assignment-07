import React from "react";

const Navbar = () => {
  return (
    <div className="h-auto sm:h-16 flex flex-wrap sm:flex-nowrap justify-between items-center shadow-sm sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#E9E9E9] px-6 sm:px-10 py-3">
      
      {/* -------------Logo ---------------*/}
      <h1 className="text-xl font-bold font-[Inter] text-[#130B2D] mb-2 sm:mb-0">
        CS — <span>Ticket System</span>
      </h1>

      {/*-------- Menu Items------------ */}
      <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 font-medium font-[Inter] text-[#130B2D] w-full sm:w-auto">
        <a href="#">Home</a>
        <a href="#">FAQ</a>
        <a href="#">Changelog</a>
        <a href="#">Blog</a>
        <a href="#">Download</a>
        <a href="#">Contact</a>

        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#5A28D4] hover:to-[#8E55E5] px-5 sm:px-8 py-2 rounded text-white font-medium shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer">
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
