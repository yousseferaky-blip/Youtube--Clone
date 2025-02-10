import { useContext, useEffect, useState } from "react";
import { VideoContext } from "../../Context/VideoContext"; 
import { useNavigate } from "react-router-dom";
import img from "../../assets/myPhoto.jpg";
import "./Home.css";

const Home = ({ viSible }) => {
  const { videos } = useContext(VideoContext); 
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(true);

  const handleVideoClick = (video) => {
    const videoId = video.id?.videoId || video.id; 
    if (videoId) {
      navigate(`/video/${videoId}`);
    } else {
      console.error("❌ Error: videoId is undefined!", video);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); 
  }, []);

  return (
    <section className={viSible ? "Side" : ""}>
      <article>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div 
              key={video.id?.videoId || video.id} 
              onClick={() => handleVideoClick(video)} 
              className="video-card"
            >
              <img 
                src={isMounted ? video.snippet.thumbnails.medium.url : img} 
                alt={video.snippet.title} 
                loading="lazy"
                onError={(e) => {
                  if (isMounted) {
                    e.target.src = img; 
                  }
                }}
              />
              <h2>{video.snippet.title}</h2>
              <h3>{video.snippet.channelTitle}</h3>
              <p>{new Date(video.snippet.publishedAt).toDateString()}</p>
            </div>
          ))
        ) : (
          <p>Loading videos...</p>
        )}
      </article>
    </section>
  );
};

export default Home;
