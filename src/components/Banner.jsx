// src/components/Banner.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
// Assuming assets is correctly imported for vector images (if they are used)
// import { assets } from "../data/assets"; 

const Banner = () => {
    const { inProgressCount, resolvedCount } = useContext(AppContext);

    return (
        <div className="container mx-auto px-4 md:px-8 py-8">
            <div className="grid md:grid-cols-2 gap-6">
                
                {/* In Progress Banner - Linear Gradient Background */}
                <div className="relative rounded-xl p-8 bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-xl overflow-hidden">
                    {/* Background Vectors (assuming you want to use them) */}
                    {/* <img src={assets.vector1} alt="Vector 1" className="absolute top-0 right-0 opacity-10" /> */}
                    
                    <h3 className="text-sm opacity-90 tracking-widest uppercase">In-Progress</h3>
                    <div className="text-6xl font-extrabold mt-2">{inProgressCount}</div>
      
                </div>

                {/* Resolved Banner - Linear Gradient Background */}
                <div className="relative rounded-xl p-8 bg-gradient-to-r from-teal-400 to-green-600 text-white shadow-xl overflow-hidden">
                    
                    <h3 className="text-sm opacity-90 tracking-widest uppercase">Resolved</h3>
                    <div className="text-6xl font-extrabold mt-2">{resolvedCount}</div>
            
                </div>
            </div>
        </div>
    );
};

export default Banner;