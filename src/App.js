import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="w-full fixed top-0">
          <Navbar />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="navbar2/" element={<Home />} />
          <Route path="navbar2/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
