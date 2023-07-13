import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@pages/Home/Home";
import Login from "@pages/Login/Login";
import Editor from "@pages/Editor/Editor";
import Aggrid from "@pages/Aggrid/Aggrid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ag-grid" element={<Aggrid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
