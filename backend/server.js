import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/*
  ✅ Render requires dynamic PORT
*/
const PORT = process.env.PORT || 5000;

/*
  ✅ NEVER hardcode API keys
*/
const YT_API_KEY = process.env.YOUTUBE_API_KEY;

/*
  Health check route (optional but professional)
*/
app.get("/", (req, res) => {
  res.send("WorldSense backend running ✅");
});


/*
  YouTube endpoint
*/
app.get("/api/youtube", async (req, res) => {
  try {
    const country = req.query.country;

    if (!country) {
      return res.status(400).json({ error: "Country required" });
    }

    /*
      Stronger positive search
      (documentary / nature / culture / travel only)
    */
    const query = `${country} documentary nature culture history travel tourism`;

    const url =
      `https://www.googleapis.com/youtube/v3/search` +
      `?part=snippet` +
      `&type=video` +
      `&maxResults=10` +
      `&videoEmbeddable=true` +
      `&safeSearch=strict` +
      `&q=${encodeURIComponent(query)}` +
      `&key=${YT_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    const videos = data.items || [];

    /*
      ❌ Remove negative / restricted content
    */
    const negativeWords = [
      "war",
      "attack",
      "conflict",
      "crime",
      "famine",
      "disaster",
      "violence",
      "terror",
      "news",
      "breaking",
      "politics"
    ];

    const goodVideos = videos.filter((v) => {
      const title = (v.snippet?.title || "").toLowerCase();

      return !negativeWords.some((word) =>
        title.includes(word)
      );
    });

    const formatted = goodVideos.map((v) => ({
      videoId: v.id.videoId,
      title: v.snippet.title,
      description: v.snippet.description,
      channel: v.snippet.channelTitle,
      thumbnail: v.snippet.thumbnails?.high?.url
    }));

    res.json({
      videos: formatted,
      selected: formatted[0]?.videoId || null
    });

  } catch (err) {
    console.error("YouTube API fetch error:", err);
    res.status(500).json({ error: "Failed to fetch YouTube data" });
  }
});


/*
  Start server
*/
app.listen(PORT, () =>
  console.log(`Backend running on port ${PORT}`)
);
