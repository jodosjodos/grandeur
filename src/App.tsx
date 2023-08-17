import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CircularProgressBar from "./pages/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  setLoading;
  return (
    <div className="w-screen h-screen bg-[#0d0d0d]">
      {loading ? (
        <CircularProgressBar  setLoading={setLoading}/>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
