import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const addToProgress = (ticket) => {
    setInProgress([...inProgress, ticket]);
  };

  const completeTask = (ticketId) => {
    const completedTicket = inProgress.find((t) => t.id === ticketId);
    if (completedTicket) {
      setResolved([...resolved, completedTicket]);
      setInProgress(inProgress.filter((t) => t.id !== ticketId));
    }
  };

  const value = {
    inProgress,
    setInProgress,
    resolved,
    setResolved,
    addToProgress,
    completeTask,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
