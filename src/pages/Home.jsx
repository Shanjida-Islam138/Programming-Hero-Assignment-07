import React, { useState } from "react";
import { ticketsData } from "../assets/assets";
import Banner from "../components/Banner"; 
import TicketCard from "../components/TicketCard";
import TaskStatus from "../components/TaskStatus";


const Home = () => {
  const [tickets, setTickets] = useState(ticketsData);

  const handleAddToTask = (ticket) => {
    console.log("Ticket added:", ticket);
  };

  return (
    <div className="container mx-auto px-8 py-10">
      <Banner />
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Customer Tickets</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {tickets.map((t) => (
              <TicketCard key={t.id} ticket={t} onClick={handleAddToTask} />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div>
          <TaskStatus />
        </div>
      </div>
    </div>
  );
};

export default Home; // 🔥 এটা থাকতে হবে নাহলে App.jsx এ import error হবে
