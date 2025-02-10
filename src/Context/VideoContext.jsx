import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL, apiKey, categories } from "../Constants/Constant";

export const VideoContext = createContext(); 

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState("News");

  const fetchVideos = async (selectedCategory) => {
  const controller = new AbortController();
  try {
    const categoryId = categories[selectedCategory] || 0;
    const response = await axios.get(`${API_URL}/videos?part=snippet,statistics&chart=mostPopular&videoCategoryId=${categoryId}&maxResults=70&regionCode=US&key=${apiKey}`, {
      signal: controller.signal, 
    });
    setVideos(response.data.items);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else {
      console.error("API Error:", error);
    }
  }
  return () => controller.abort(); 
};

  
  useEffect(() => {
    fetchVideos(category);
  }, [category]);

  return (
    <VideoContext.Provider value={{ videos, setVideos , category, setCategory }}>
      {children}
    </VideoContext.Provider>
  );
};
