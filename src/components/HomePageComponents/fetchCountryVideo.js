const API_KEY = `sdasdasjhdjk343e837jasdjkasd@wndsjds`;

export async function fetchCountryVideo(countryName) {
  try {
    console.log(countryName);
    const res = await fetch(
      `http://localhost:5000/api/youtube?country=${encodeURIComponent(
        countryName
      )}`
    );
    console.log(res);
    const data = await res.json();
    console.log(data);

    // data.selected = first good video
    // data.videos = array of all good videos
    return data;
  } catch (err) {
    console.error("Fetch country video error:", err);
    return { videos: [], selected: null };
  }
}
