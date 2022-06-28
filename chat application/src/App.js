import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Chat from "./Component/Chat";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </div>
  );
}
export default App;
