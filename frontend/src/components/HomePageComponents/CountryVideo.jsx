import "./styles.css";
import { useEffect, useState } from "react";
import { useLocation } from "../../hooks/LocationContext";
import { fetchCountryVideo } from "./fetchCountryVideo";
import LoadingPageSpinner from "../UI/LoadingPageSpinner";
import Error from "../UI/Error"
import { ArrowBigDown } from "lucide-react";

function CountryVideo() {
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
        Watch videos about {countryName} ▶️
      </button>
    );
  }

  if (!videos.length && !error.length) {
    return <LoadingPageSpinner type="small" msg="Loading videos..." />;
  }

  if(error.length && error !== `No more videos available for this country.`) return <Error type={`small`} msg={error} />

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


  console.log(videos);

  return (
    <>    
      <div className="vid-container">
      <h4>Travel Guides</h4>
        
        <p>{currentVideo.title}</p>
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
            <div className="btns">
              <button onClick={prevVideo}>⏮️ Previous video</button>
              <button onClick={nextVideo}>Next video ⏭️</button>
            </div>
            {error && <p className="err">{error}</p>}
            <br />
            <p className="result-pages">
              Showing video {currentIndex + 1} of {videos.length}
            </p>
          </div>
        )}
      </div>

      <div className="videos">
        <div className="scroll-btn">
          <ArrowBigDown></ArrowBigDown>
        </div>
        {videos.map(vid=> <AllVideos video={vid} key={vid.videoId} vids={videos} setCurrentIndex={setCurrentIndex} />)}
      </div>
    </>
  );
}


function AllVideos({video, vids, setCurrentIndex}) {
  function handleClick() {
    setCurrentIndex(()=> vids.findIndex(v => v.videoId === video.videoId))
  }
  
  return(
    <li className="list-video" onClick={handleClick}>
      <img src={video.thumbnail} alt={video.description} />
      <div className="about-video">
        <p className="channel">{video?.channel}</p>
        <p className="title">{video?.title?.slice(0,40)}...</p>
        <p className="time">{video?.publishTime?.split(`T`)[0]}</p>
      </div>
    </li>
  )
}


export default CountryVideo;