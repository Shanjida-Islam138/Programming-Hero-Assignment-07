// src/pages/Home.jsx
import React, { useContext } from "react";
import Banner from "../components/Banner";
import TicketCard from "../components/TicketCard";
import TaskStatus from "../components/TaskStatus";
import { AppContext } from "../context/AppContext";

const Home = () => {
    const { tickets } = useContext(AppContext);

    return (
        <div className="bg-gray-50 pb-10 min-h-screen">
            <Banner />
            <div className="container mx-auto px-4 md:px-8 py-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Section (Customer Tickets) */}
                    <div className="lg:col-span-2">
                        {/* Modified: Removed count and simplified style to match the provided image header */}
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Tickets</h2> 
                        <div className="grid md:grid-cols-2 gap-5">
                            {tickets.length === 0 ? (
                                <p className="text-lg text-gray-500 md:col-span-2 p-5 text-center">🎉 All open tickets are currently being worked on or resolved!</p>
                            ) : (
                                tickets.map((t) => (
                                    <TicketCard key={t.id} ticket={t} />
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right Section (Task Status) */}
                    <div className="lg:col-span-1">
                        <TaskStatus />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;