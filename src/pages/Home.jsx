import React, { useContext } from "react";
import Banner from "../components/Banner";
import TicketCard from "../components/TicketCard";
import TaskStatus from "../components/TaskStatusSection";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { tickets, addToProgress } = useContext(AppContext);

  const handleAddToProgress = (ticket) => {
    addToProgress(ticket);
    toast.info(`"${ticket.title}" added to In Progress!`);
  };

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <Banner />

      {/* Main grid: Tickets left, TaskStatus right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* Left side - Customer Tickets */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Customer Tickets</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tickets.map((t) => (
              <TicketCard key={t.id} ticket={t} onClick={handleAddToProgress} />
            ))}
          </div>
        </div>

        {/* Right side - Task Status */}
        <div>
          <TaskStatus />
        </div>
      </div>
    </div>
  );
};

export default Home;
