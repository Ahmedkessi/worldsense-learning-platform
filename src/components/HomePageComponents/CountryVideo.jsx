import "./styles.css";
import { useEffect, useState } from "react";
import { useLocation } from "../../hooks/LocationContext";
import { fetchCountryVideo } from "./fetchCountryVideo";
import LoadingPageSpinner from "../UIComponents/LoadingPageSpinner";
import Error from "../UIComponents/Error"

export default function CountryVideo() {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { country, isLoading } = useLocation();
  const [error, setError] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const countryName = country?.name?.common;

  // Reset showVideo and videos whenever country changes
  useEffect(() => {
    setShowVideo(false);
    setVideos([]);
    setCurrentIndex(0);
    setError("");
  }, [countryName]);

  // Fetch videos when user clicks "Watch"
  useEffect(() => {
    if (!showVideo || !countryName) return;

    async function loadVideos() {
      try {
        const data = await fetchCountryVideo(countryName);
        setVideos(data.videos || []);
        setCurrentIndex(0);
        setError(()=> data?.error?.length ? data?.error : ``);
      } catch (err) {
        console.error("Fetch country video error:", err);
        setError("Failed to load videos.");
      }
    }

    loadVideos();
  }, [showVideo, countryName]);

  if(isLoading) return <LoadingPageSpinner type="small" msg={`Loading videos...`} />

  if (!showVideo) {
    return (
      <button className="btn-show" onClick={() => setShowVideo(true)}>
        Watch video about {countryName} ▶️
      </button>
    );
  }

  if (!videos.length && !error.length) {
    return <LoadingPageSpinner type="small" msg="Loading videos..." />;
  }

  if(error.length) return <Error type={`small`} msg={error} />

  const currentVideo = videos[currentIndex];

  if (!currentVideo) {
    setError(`No videos available for this country.`)
    return;
  }

  const nextVideo = () => {
    if (currentIndex + 1 < videos.length) {
      setError("");
      setCurrentIndex(currentIndex + 1);
    } else {
      setError("No more videos available for this country.");
    }
  };

  const prevVideo = () => {
    if (currentIndex > 0) {
      setError("");
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
      ></iframe>

      {videos.length > 1 && (
        <div style={{ marginTop: "10px" }}>
          <button onClick={prevVideo}>⏮️ previous Video</button>
          <button onClick={nextVideo}>next Video ⏭️</button>
          {error && <p className="err">{error}</p>}
          <p className="result-pages">
            Showing video {currentIndex + 1} of {videos.length}
          </p>
        </div>
      )}
    </div>
  );
}
