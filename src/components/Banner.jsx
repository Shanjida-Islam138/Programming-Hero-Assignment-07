
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Banner = () => {
    const { inProgressCount, resolvedCount } = useContext(AppContext);

    return (
        <div className="container mx-auto px-4 md:px-8 py-8">
            <div className="grid md:grid-cols-2 gap-6">
                
                {/*----------- In Progress Banner ------------------*/}
                <div className="relative rounded-xl p-8 bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-xl overflow-hidden flex flex-col items-center justify-center text-center">
                    <h3 className="text-sm opacity-90 tracking-widest mb-2">In-Progress</h3>
                    <div className="text-6xl font-extrabold">{inProgressCount}</div>
                </div>

                {/* --------------------Resolved Banner ---------------*/}
                <div className="relative rounded-xl p-8 bg-gradient-to-r from-teal-400 to-green-600 text-white shadow-xl overflow-hidden flex flex-col items-center justify-center text-center">
                    <h3 className="text-sm opacity-90 tracking-widest mb-2">Resolved</h3>
                    <div className="text-6xl font-extrabold">{resolvedCount}</div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
