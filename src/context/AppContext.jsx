// src/context/AppContext.jsx
import React, { createContext, useState } from "react";
// Assuming ticketsData is imported from the data file you provided
import { ticketsData } from "../data/tickets"; 
// import { toast } from "react-toastify"; // Ensure toast is imported if used elsewhere

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    
    // 1. Initial filtering for sidebar states
    // These lists hold tickets for the Task Status and Resolved sidebars.
    const initialTaskStatus = ticketsData.filter(t => t.status === "In-Progress");
    const initialResolved = ticketsData.filter(t => t.status === "Resolved");
    
    // 2. The main 'tickets' state holds ALL 10 tickets initially, sorted by ID, 
    // to show them serially with their correct initial status (Open/In-Progress).
    let allInitialTickets = [...ticketsData];
    allInitialTickets.sort((a, b) => a.id - b.id);
    
    const [tickets, setTickets] = useState(allInitialTickets); 
    const [taskStatus, setTaskStatus] = useState(initialTaskStatus); 
    const [resolved, setResolved] = useState(initialResolved); 

    // Function to move an 'Open' ticket to 'In-Progress'.
    const addToTaskStatus = (ticket) => {
        if (ticket.status !== 'Open') {
            return false;
        }

        // 1. Update status in the main tickets list (CARD REMAINS IN GRID, STATUS CHANGES to 'In-Progress')
        setTickets(prevTickets => prevTickets.map(t => 
            t.id === ticket.id ? { ...t, status: "In-Progress" } : t
        ));

        // 2. Add to the Task Status sidebar list (In Progress Count increases)
        const inProgressTicket = { ...ticket, status: "In-Progress" };
        setTaskStatus(prev => [inProgressTicket, ...prev]);
        
        return true;
    };

    // Function to move a ticket from 'In-Progress' to 'Resolved'.
    const completeTask = (ticketId) => {
        const task = taskStatus.find((t) => t.id === ticketId);
        if (!task) return false;

        // 1. Remove from Task Status sidebar (In Progress Count decreases)
        setTaskStatus((prev) => prev.filter((t) => t.id !== ticketId));

        // 2. Add to Resolved sidebar list (Resolved Count increases)
        const resolvedTicket = { ...task, status: "Resolved" };
        setResolved((prev) => [resolvedTicket, ...prev]);

        // 3. REMOVE from the main Customer Tickets list (as per the Task Completion Logic requirement)
        setTickets(prevTickets => prevTickets.filter(t => t.id !== ticketId));
        
        return true;
    };

    const value = {
        tickets,
        taskStatus,
        resolved,
        addToTaskStatus,
        completeTask,
        inProgressCount: taskStatus.length,
        resolvedCount: resolved.length,
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};