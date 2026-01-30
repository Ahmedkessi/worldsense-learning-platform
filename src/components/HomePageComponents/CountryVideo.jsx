import "./styles.css";
import { useEffect, useState } from "react";
import { useLocation } from "../../hooks/LocationContext";
import { fetchCountryVideo } from "./fetchCountryVideo";
import LoadingPageSpinner from "../UIComponents/LoadingPageSpinner";


export default function CountryVideo() {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {country} = useLocation();
  const [error, setError] = useState(``)
  const countryName = country?.name?.common;

  useEffect(() => {
    async function loadVideos() {
      const data = await fetchCountryVideo(countryName);
      setVideos(data.videos || []);
      setCurrentIndex(0);
    }
    loadVideos();
  }, [countryName]);

  if (!videos.length) return <LoadingPageSpinner type={`small`} msg={`Loading videos...`} />;

  const currentVideo = videos[currentIndex];


  const nextVideo = () => {
    if (currentIndex + 1 < videos.length) {
        setError(``)
      setCurrentIndex(currentIndex + 1);
    } else {
      setError("No more videos available for this country.");
    }
  };

  const prevVideo = () => {
    if (currentIndex > 0) {
        setError(``)
      setCurrentIndex(currentIndex - 1);
    } else {
      setError("No more videos available for this country.");
    }
  };

  return (
    <div className="vid-container">
      <h4>{currentVideo.title}</h4>
      <p>{currentVideo.description}</p>
      <iframe
        className="vid-box"
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
        
        title={currentVideo.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onError={nextVideo} // automatically try next video if embed fails
      ></iframe>
      {videos.length > 1 && (
        <div style={{ marginTop: "10px" }}>
          <button onClick={prevVideo}>Prev Video</button>
          <button onClick={nextVideo}>Next Video</button>
          {error.length > 0 && <p className="err">{error}</p>}
          <p className="result-pages">
            Showing video {currentIndex + 1} of {videos.length}
          </p>
        </div>
      )}
    </div>
  );
}
