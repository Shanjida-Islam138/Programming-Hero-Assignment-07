import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState([
    {
      id: 1001,
      title: "Login Issues - Can't Access Account",
      description:
        "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
      customer: "John Smith",
      priority: "High",
      status: "Open",
      createdAt: "1/15/2024",
    },
    {
      id: 1002,
      title: "Payment Failed - Card Declined",
      description:
        "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
      customer: "Sarah Johnson",
      priority: "High",
      status: "Open",
      createdAt: "1/16/2024",
    },
    {
      id: 1003,
      title: "Unable to Download Invoice",
      description:
        "Customer cannot download their January invoice from the billing section.",
      customer: "Michael Brown",
      priority: "Medium",
      status: "In-Progress",
      createdAt: "1/17/2024",
    },
  ]);

  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // When a ticket is clicked, add it to In-Progress
  const addToProgress = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
    }
  };

  // When completed, move from In-Progress to Resolved
  const completeTask = (ticketId) => {
    const completed = inProgress.find((t) => t.id === ticketId);
    if (completed) {
      setResolved([...resolved, completed]);
      setInProgress(inProgress.filter((t) => t.id !== ticketId));
      setTickets(tickets.filter((t) => t.id !== ticketId)); // remove from main list
    }
  };

  const value = {
    tickets,
    inProgress,
    resolved,
    addToProgress,
    completeTask,
  };

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};
