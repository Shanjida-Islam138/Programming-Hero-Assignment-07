import React, { createContext, useEffect, useState } from "react";
import { ticketsData } from "../data/tickets";


export const AppContext = createContext();


export const AppContextProvider = (props) => {
const [tickets, setTickets] = useState([]);
const [taskStatus, setTaskStatus] = useState([]);
const [resolved, setResolved] = useState([]);


const fetchTickets = async () => {
setTickets(ticketsData.map((t) => ({ ...t })));
};


useEffect(() => {
fetchTickets();
}, []);


const addToTaskStatus = (ticket) => {
if (taskStatus.find((t) => t.id === ticket.id) || resolved.find((r) => r.id === ticket.id))
return false;


setTaskStatus((prev) => [...prev, { ...ticket, status: "In-Progress" }]);
setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
return true;
};


const completeTask = (ticketId) => {
const task = taskStatus.find((t) => t.id === ticketId);
if (!task) return false;


setTaskStatus((prev) => prev.filter((t) => t.id !== ticketId));
setResolved((prev) => [{ ...task, status: "Resolved" }, ...prev]);
return true;
};


const value = {
tickets,
setTickets,
taskStatus,
setTaskStatus,
resolved,
setResolved,
addToTaskStatus,
completeTask,
inProgressCount: taskStatus.length,
resolvedCount: resolved.length,
};


return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};