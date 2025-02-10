import "./Navbar.css";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import img from "../../assets/myPhoto.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { VideoContext } from "../../Context/VideoContext";
import { API_URL, apiKey } from "../../Constants/Constant";

const Navbar = ({ onToggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setVideos } = useContext(VideoContext);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return; 
  
    try {
      const response = await axios.get(
        `${API_URL}/search?part=snippet&q=${searchTerm}&type=video,channel&maxResults=70&key=${apiKey}`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  

  return (
    <header>
      <div className="Tabs">
        <HiMiniBars3CenterLeft onClick={onToggleSidebar} className="tabs" />
        <h1>
          <Link to="/" className="Link" aria-label="Go to YouTube Homepage">
            YouTube
          </Link>
        </h1>
      </div>
      <div className="Search">
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
          aria-label="Search videos on YouTube"
        />
        <CiSearch onClick={handleSearch} className="search-icon" /> 
      </div>
      <div className="Img">
        <img src={img} alt="Profile picture of the user"
        onError={(e) => e.target.style.display = 'none'} 
        loading="lazy" />
      </div>
    </header>
  );
};

export default Navbar;
