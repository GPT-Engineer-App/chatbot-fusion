import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import GptEngineer from "./pages/GptEngineer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gpt-engineer" element={<GptEngineer />} />
      </Routes>
    </Router>
  );
}

export default App;
