import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agenda from "./pages/Agenda";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda/>}/>
      </Routes>
    </Router>
  );
}

export default App;
