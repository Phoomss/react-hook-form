import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./pages/Results";
import FormData from "./pages/FormData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormData />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
