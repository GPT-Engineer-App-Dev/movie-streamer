import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MovieStreaming from "./pages/MovieStreaming";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/movies" element={<MovieStreaming />} />
      </Routes>
    </Router>
  );
}

export default App;
