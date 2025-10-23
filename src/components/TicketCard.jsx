// src/components/TicketCard.jsx
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const PriorityBadge = ({ priority }) => {
    const base = "text-xs font-semibold uppercase";
    if (priority === "High")
        return <span className={`${base} text-red-500`}>HIGH PRIORITY</span>; 
    if (priority === "Medium")
        return (
            <span className={`${base} text-yellow-600`}>MEDIUM PRIORITY</span>
        );
    return <span className={`${base} text-green-600`}>LOW PRIORITY</span>; 
};

const StatusPill = ({ status }) => {
    // Custom colors from your requirement
    const IN_PROGRESS_BG = "#F8F3B9";
    const IN_PROGRESS_TEXT = "#FEBB0C";
    const OPEN_BG = "#B9F8CF";
    const OPEN_TEXT = "#02A53B";
    const RESOLVED_BG = "#e5e7eb"; 
    const RESOLVED_TEXT = "#6b7280"; 

    const base = "px-2 py-0.5 rounded-full text-xs font-medium";
    const fontStyle = { fontFamily: 'Inter, sans-serif' };

    if (status === "Open")
        return (
            <span 
                className={base} 
                style={{ backgroundColor: OPEN_BG, color: OPEN_TEXT, ...fontStyle }}
            >
                Open
            </span>
        );
    
    if (status === "In-Progress") 
        return (
            <span 
                className={base} 
                style={{ backgroundColor: IN_PROGRESS_BG, color: IN_PROGRESS_TEXT, ...fontStyle }}
            >
                In-Progress
            </span>
        );
        
    return (
        <span 
            className={base} 
            style={{ backgroundColor: RESOLVED_BG, color: RESOLVED_TEXT, ...fontStyle }}
        >
            Resolved
        </span>
    );
};

const TicketCard = ({ ticket }) => {
    const { addToTaskStatus } = useContext(AppContext);

    const handleCardClick = () => {
        if (ticket.status === 'Open') {
            const success = addToTaskStatus(ticket);
            if (success) {
                // Simplified toast message
                toast.success(`Ticket #${ticket.id} is now in progress.`);
            } 
        } else {
            // Simplified info message
            toast.info(`Ticket #${ticket.id} is already ${ticket.status}.`);
        }
    };

    const dateParts = ticket.createdAt.split('-'); 
    const formattedDate = `${parseInt(dateParts[1])}/${parseInt(dateParts[2])}/${dateParts[0]}`; 

    return (
        <div
            onClick={handleCardClick} 
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md cursor-pointer transition"
        >
            {/* Header: Title and Status Pill */}
            <div className="flex justify-between items-start mb-1">
                <h4 className="text-lg font-semibold text-gray-800 leading-snug">
                    {ticket.title}
                </h4>
                <StatusPill status={ticket.status} /> 
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-3 mb-3 leading-tight">
                {ticket.description}
            </p>

            {/* Footer Row */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                <div className="flex items-center gap-4">
                    <span className="text-gray-500 font-normal">#{ticket.id}</span>
                    <PriorityBadge priority={ticket.priority} />
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-medium">{ticket.customer}</span>
                    <span className="text-gray-500">{formattedDate}</span> 
                </div>
            </div>
        </div>
    );
};

export default TicketCard;