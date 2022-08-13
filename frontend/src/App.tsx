import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, CreateRoom,  RoomJoin } from "./components";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<RoomJoin />} />
      <Route path="/create" element={<CreateRoom />} />
    </Routes>
  );
}

export default App;
