import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@pages/Home";
import Login from "@pages/Login";
import Editor from "@pages/Editor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
