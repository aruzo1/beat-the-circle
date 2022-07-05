import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/room/:id" element={<Room />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;