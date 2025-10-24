
import React, { createContext, useState } from "react";

import { ticketsData } from "../data/tickets"; 


export const AppContext = createContext();

export const AppContextProvider = (props) => {
    
 
    const initialTaskStatus = ticketsData.filter(t => t.status === "In-Progress");
    const initialResolved = ticketsData.filter(t => t.status === "Resolved");

    let allInitialTickets = [...ticketsData];
    allInitialTickets.sort((a, b) => a.id - b.id);
    
    const [tickets, setTickets] = useState(allInitialTickets); 
    const [taskStatus, setTaskStatus] = useState(initialTaskStatus); 
    const [resolved, setResolved] = useState(initialResolved); 


    const addToTaskStatus = (ticket) => {
        if (ticket.status !== 'Open') {
            return false;
        }

    
        setTickets(prevTickets => prevTickets.map(t => 
            t.id === ticket.id ? { ...t, status: "In-Progress" } : t
        ));


        const inProgressTicket = { ...ticket, status: "In-Progress" };
        setTaskStatus(prev => [inProgressTicket, ...prev]);
        
        return true;
    };

 
    const completeTask = (ticketId) => {
        const task = taskStatus.find((t) => t.id === ticketId);
        if (!task) return false;

        setTaskStatus((prev) => prev.filter((t) => t.id !== ticketId));

    
        const resolvedTicket = { ...task, status: "Resolved" };
        setResolved((prev) => [resolvedTicket, ...prev]);

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