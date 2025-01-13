import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agenda from "./pages/Agenda";
import Home from "./pages/Home";
import Quotation from "./pages/Quotation";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/agenda" element={<Agenda/>}/>
        <Route path="/cotizar" element={<Quotation/>}/>
        <Route path="/servicios" element={<ServicesPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
