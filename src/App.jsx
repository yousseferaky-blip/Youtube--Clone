import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <Navbar onToggleSidebar={handleSidebar} />
      <Sidebar visible={sidebarVisible} />
      <Routes>
        <Route path="/" element={<Home viSible={sidebarVisible} />} />
        <Route path="/video/:videoId"  element={<VideoPage viSiBle={sidebarVisible}/>} />
      </Routes>
    </>
  );
}

export default App;
