import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, CreateRoom, RoomJoin } from "./components";
import Room from "./components/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="join"  element={<RoomJoin />}>
        <Route  path="create" element={<CreateRoom />} />
        <Route path="room/:roomCode" element={<Room />} />
      </Route>
    </Routes>
  );
}

export default App;
