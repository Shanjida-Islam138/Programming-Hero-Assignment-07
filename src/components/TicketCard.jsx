import React from "react";

const PriorityBadge = ({ priority }) => {
  const base = "px-2 py-0.5 rounded-full text-xs font-semibold";
  if (priority === "High")
    return <span className={`${base} bg-red-100 text-red-700`}>HIGH PRIORITY</span>;
  if (priority === "Medium")
    return <span className={`${base} bg-yellow-100 text-yellow-700`}>MEDIUM PRIORITY</span>;
  return <span className={`${base} bg-green-100 text-green-700`}>LOW PRIORITY</span>;
};

const StatusPill = ({ status }) => {
  const base = "px-2 py-0.5 rounded-full text-xs font-medium";
  if (status === "Open")
    return <span className={`${base} bg-green-50 text-green-700`}>Open</span>;
  if (status === "In-Progress")
    return <span className={`${base} bg-yellow-50 text-yellow-700`}>In-Progress</span>;
  return <span className={`${base} bg-gray-100 text-gray-700`}>Resolved</span>;
};

const TicketCard = ({ ticket, onClick }) => {
  return (
    <div
      onClick={() => onClick(ticket)}
      className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md cursor-pointer transition"
    >
      <div className="flex justify-between items-start">
        <h4 className="text-md font-semibold">{ticket.title}</h4>
        <StatusPill status={ticket.status} />
      </div>

      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{ticket.description}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">#{ticket.id}</span>
          <PriorityBadge priority={ticket.priority} />
        </div>
        <div className="flex items-center gap-3">
          <span>{ticket.customer}</span>
          <span>{ticket.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
