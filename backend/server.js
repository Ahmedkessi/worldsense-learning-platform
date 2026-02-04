import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const YT_API_KEY = process.env.YOUTUBE_API_KEY;

// Simple in-memory cache to reduce API calls
const cache = {};

// Default placeholder video if API fails or quota exceeded
const PLACEHOLDER_VIDEO = {
  videoId: "wRDkqHEhJJ9MH7EO",
  title: "WorldSense Featured Video",
  description: "Default video.",
  channel: "WorldSense",
  thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1ek0dAYBA9NZSWsvPh1Vt0I2Arln6yPt_w&s"
};

// Health check
app.get("/", (req, res) => {
  res.send("WorldSense backend running ✅");
});

app.get("/api/youtube", async (req, res) => {
  try {
    const country = req.query.country?.trim();

    if (!country) {
      return res.status(400).json({ error: "Country required" });
    }

    // Return cache if exists
    if (cache[country]) {
      return res.json(cache[country]);
    }

    const query = `${country} travell`;

    const url =
      `https://www.googleapis.com/youtube/v3/search` +
      `?part=snippet` +
      `&type=video` +
      `&maxResults=10` +
      `&videoEmbeddable=true` +
      `&safeSearch=strict` +
      `&videoDuration=medium` + 
      `&q=${encodeURIComponent(query)}` +
      `&key=${YT_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    // Handle quota exceeded
    if (data.error && data.error.code === 403) {
      console.warn("YouTube API quota exceeded, returning placeholder");
      const result = {
        videos: [PLACEHOLDER_VIDEO],
        selected: PLACEHOLDER_VIDEO.videoId
      };
      cache[country] = result;
      return res.json(result);
    }

    const videos = data.items || [];

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
      return !negativeWords.some((word) => title.includes(word));
    });


    const formatted = goodVideos.map((v) => ({
      videoId: v.id.videoId,
      title: v.snippet.title,
      description: v.snippet.description,
      channel: v.snippet.channelTitle,
      publishTime: v.snippet.publishTime,
      thumbnail: v.snippet.thumbnails?.high?.url
    }));

    // If no good videos, fallback to placeholder
    const result = {
      videos: formatted.length > 0 ? formatted : [PLACEHOLDER_VIDEO],
      selected: formatted[0]?.videoId || PLACEHOLDER_VIDEO.videoId
    };

    // Cache result
    cache[country] = result;

    res.json(result);

  } catch (err) {
    console.error("YouTube API fetch error:", err);
    res.json({
      videos: [PLACEHOLDER_VIDEO],
      selected: PLACEHOLDER_VIDEO.videoId
    });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
