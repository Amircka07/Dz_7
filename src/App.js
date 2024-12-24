import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddTaskPage from "./pages/AddTaskPage";
import { AppNavBar } from "./pages/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTaskPage />} />
      </Routes>
    </>
  );
};

export default App;
