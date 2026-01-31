import { API_BASE } from "../../config";

export async function fetchCountryVideo(countryName) {
  try {
    const res = await fetch(`${API_BASE}/api/youtube?country=${encodeURIComponent(countryName)}`);
    const data = await res.json();
    console.log("API_BASE:", API_BASE);
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.error("Fetch country video error:", err);
    return { videos: [], selected: null };
  }
}
