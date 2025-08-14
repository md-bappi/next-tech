import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <div className=" min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
