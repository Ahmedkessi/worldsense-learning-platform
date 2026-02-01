import { API_BASE } from "../../config";

export async function fetchCountryVideo(countryName) {
  try {
    const res = await fetch(`${API_BASE}/api/youtube?country=${encodeURIComponent(countryName)}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return { videos: [], error:`No videos available for this country.`, selected: null };
  }
}
