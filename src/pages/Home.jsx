import React, { useContext } from "react";
import Banner from "../components/Banner";
import TicketCard from "../components/TicketCard";
import TaskStatus from "../components/TaskStatus";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";


const Home = () => {
const { tickets, addToTaskStatus } = useContext(AppContext);


const handleAddToTask = (ticket) => {
const added = addToTaskStatus(ticket);
if (added) {
toast.info("Ticket added to Task Status");
} else {
toast.warn("Ticket already added or already resolved");
}
};


return (
<div className="min-h-screen bg-gray-50">
<Banner />


<div className="container mx-auto px-4 py-6">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-semibold">Customer Tickets</h2>
</div>


<div className="grid md:grid-cols-2 gap-4">
{tickets.map((t) => (
<TicketCard key={t.id} ticket={t} onClick={handleAddToTask} />
))}
</div>
</div>


<div>
<TaskStatus />
</div>
</div>
</div>
</div>
);
};


export default Home;