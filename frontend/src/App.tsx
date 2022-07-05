import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Queue from "pages/Queue";
import Room from "pages/Room";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
