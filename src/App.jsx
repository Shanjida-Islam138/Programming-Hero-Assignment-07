import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <Navbar />
      <Home />
    </AppContextProvider>
  );
};

export default App;
