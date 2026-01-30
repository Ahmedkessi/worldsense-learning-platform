import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const YT_API_KEY = "AIzaSyB_JNhPajXXvYjyVJmREGGSElXBdsjnEYc";

app.get("/api/youtube", async (req, res) => {
  const country = req.query.country;
  const query = `${country} country documentary nature culture travel`;

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(
      query
    )}&key=${YT_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    const videos = data.items || [];

    // Filter negative/unwanted videos by title keywords
    const goodVideos = videos.filter((v) => {
      const title = (v.snippet?.title || "").toLowerCase();
      const negativeWords = [
        "war",
        "attack",
        "conflict",
        "crime",
        "famine",
        "disaster",
        "violence"
      ];
      return !negativeWords.some((word) => title.includes(word));
    });

    res.json({
      videos: goodVideos.map((v) => ({
        videoId: v.id.videoId,
        title: v.snippet?.title,
        description: v.snippet?.description,
        channel: v.snippet?.channelTitle,
        thumbnail: v.snippet?.thumbnails?.high?.url
      })),
      selected: goodVideos[0]?.id?.videoId || null
    });
  } catch (err) {
    console.error("YouTube API fetch error:", err);
    res.status(500).json({ error: "Failed to fetch YouTube data" });
  }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
