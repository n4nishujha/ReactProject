import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import HomePage from "./Pages/Home/HomePage";
import AboutUsPage from "./Pages/Home/AboutUsPage";
import NotFoundPage from "./Pages/Home/NotFoundPage";
import Footer from "./components/Layouts/Footer";
import Contact from "./Pages/Home/Contact";
import Login from "./Pages/Home/Login";

function App() {
  const [setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
