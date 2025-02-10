import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./VideoPage.css";
import { API_URL, apiKey } from "../../Constants/Constant";


const VideoPage = ({viSiBle}) => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${apiKey}`
        );
        setVideoDetails(response.data.items[0]);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/commentThreads?part=snippet&videoId=${videoId}&maxResults=40&key=${apiKey}`
        );
        setComments(response.data.items);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchVideoDetails();
    fetchComments();
  }, [videoId]);

  if (!videoDetails) return <p>Loading video details...</p>;

  return (
    <article className={viSiBle ? "video_page" : "video-page"}>
    <div className="video-container">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={videoDetails.snippet.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    <div className="video-info">
      <h1>{videoDetails.snippet.title}</h1>
      <h3>🎥 {videoDetails.snippet.channelTitle}</h3>
      <p>{videoDetails.statistics.viewCount} views • {new Date(videoDetails.snippet.publishedAt).toDateString()}</p>
      {
        videoDetails.snippet.description 
        ? 
        <p className="description">{videoDetails.snippet.description} </p>
        :
        <p>No Description available.</p>
      }
     
    </div>

    <div className="comments-section">
      <h2>💬 Comments</h2>
      {comments.length > 1 ? (
        comments.slice(1).map((comment, index) => (
          <div key={index} className="comment">
            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="User" loading="lazy"/>
            <div className="comment-text">
              <h4>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h4>
              <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No comments available.</p>
      )}

    </div>
  </article>
  );
};

export default VideoPage;
