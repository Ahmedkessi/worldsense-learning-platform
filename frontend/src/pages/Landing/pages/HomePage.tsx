import React, { useEffect, useState } from 'react';
import { StarBackground } from '../components/StarBackground';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/GlowButton';
import {
  Search,
  MapPin,
  Wind,
  Droplets,
  Thermometer,
  Heart,
  Share2,
  Bookmark,
  PlayCircle,
  Loader2,
  AlertCircle } from
'lucide-react';
import { Link } from 'react-router-dom';
// Mock Data
const MOCK_COUNTRY = {
  name: 'Japan',
  flag: '🇯🇵',
  capital: 'Tokyo',
  language: 'Japanese',
  currency: 'JPY (¥)',
  population: '125.8M',
  region: 'Asia',
  area: '377,975 km²',
  description:
  'Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.'
};
const MOCK_WEATHER = {
  temp: '18°C',
  condition: 'Partly Cloudy',
  humidity: '65%',
  wind: '12 km/h'
};
const MOCK_IMAGES = [
'bg-gradient-to-br from-pink-500 to-rose-500',
'bg-gradient-to-br from-blue-400 to-cyan-300',
'bg-gradient-to-br from-emerald-400 to-teal-500',
'bg-gradient-to-br from-violet-500 to-purple-500'];

const MOCK_VIDEOS = [
{
  title: 'Tokyo Travel Guide',
  duration: '12:45',
  views: '1.2M'
},
{
  title: 'Kyoto Hidden Gems',
  duration: '8:20',
  views: '850K'
},
{
  title: 'Japanese Food Tour',
  duration: '15:30',
  views: '2.1M'
}];

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [countryData, setCountryData] = useState<typeof MOCK_COUNTRY | null>(
    null
  );
  const [isSaved, setIsSaved] = useState(false);
  const [saveNotes, setSaveNotes] = useState('');
  useEffect(() => {
    // Simulate geolocation and data fetching
    const timer = setTimeout(() => {
      // randomly succeed or fail for demo purposes (mostly succeed)
      if (Math.random() > 0.1) {
        setCountryData(MOCK_COUNTRY);
        setLoading(false);
      } else {
        setError('Could not detect location. Please search manually.');
        setLoading(false);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Simulate search
    setTimeout(() => {
      setCountryData(MOCK_COUNTRY);
      setLoading(false);
    }, 1500);
  };
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    // In real app: save to localStorage/DB
  };
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white selection:bg-[#00d4aa] selection:text-[#0a0f1a]">
      <StarBackground />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0f1a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4aa] to-blue-600 flex items-center justify-center">
              <span className="font-bold text-white">W</span>
            </div>
            <span className="text-xl font-bold tracking-tight">WorldSense</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/favourites"
              className="text-sm text-gray-300 hover:text-white transition-colors">

              Favourites
            </Link>
            <Link
              to="/quiz"
              className="text-sm text-gray-300 hover:text-white transition-colors">

              Quiz
            </Link>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00d4aa] to-blue-500" />
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="mb-12 max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-[#00d4aa] focus:ring-1 focus:ring-[#00d4aa] outline-none transition-all" />

            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00d4aa] text-[#0a0f1a] p-2 rounded-full hover:bg-[#00c29a] transition-colors">

              <MapPin className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Content Area */}
        {loading ?
        <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-[#00d4aa] animate-spin mb-4" />
            <p className="text-gray-400 animate-pulse">
              Detecting your location...
            </p>
          </div> :
        error ?
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4 border border-red-500/20">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Location Detection Failed
            </h3>
            <p className="text-gray-400 max-w-md mb-6">{error}</p>
            <GlowButton
            onClick={() => {
              setError(null);
              setLoading(true);
            }}>

              Try Again
            </GlowButton>
          </div> :
        countryData ?
        <div className="space-y-8">
            {/* Hero Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <GlassCard className="lg:col-span-2 p-8 flex flex-col justify-between overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-9xl">{countryData.flag}</span>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl">{countryData.flag}</span>
                    <div>
                      <h1 className="text-4xl font-bold text-white">
                        {countryData.name}
                      </h1>
                      <div className="flex items-center gap-2 text-[#00d4aa]">
                        <MapPin className="w-4 h-4" />
                        <span>{countryData.capital}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
                    {countryData.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-gray-500 uppercase">
                        Language
                      </p>
                      <p className="font-semibold text-white">
                        {countryData.language}
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-gray-500 uppercase">
                        Currency
                      </p>
                      <p className="font-semibold text-white">
                        {countryData.currency}
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-gray-500 uppercase">
                        Population
                      </p>
                      <p className="font-semibold text-white">
                        {countryData.population}
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-gray-500 uppercase">Area</p>
                      <p className="font-semibold text-white">
                        {countryData.area}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Weather Widget */}
              <GlassCard className="p-8 flex flex-col justify-between bg-gradient-to-br from-blue-900/40 to-[#0a0f1a]">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-[#00d4aa]" /> Current
                    Weather
                  </h3>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="text-5xl font-bold text-white">
                        {MOCK_WEATHER.temp}
                      </span>
                      <p className="text-[#00d4aa] mt-1">
                        {MOCK_WEATHER.condition}
                      </p>
                    </div>
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-4xl">⛅</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Droplets className="w-4 h-4" /> Humidity
                    </div>
                    <span className="font-bold text-white">
                      {MOCK_WEATHER.humidity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Wind className="w-4 h-4" /> Wind
                    </div>
                    <span className="font-bold text-white">
                      {MOCK_WEATHER.wind}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Gallery Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Captured Moments
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80">
                {MOCK_IMAGES.map((bg, i) =>
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden group ${i === 0 ? 'col-span-2 row-span-2' : ''} ${bg}`}>

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">
                        Photo by Unsplash
                      </p>
                    </div>
                  </div>
              )}
              </div>
            </div>

            {/* Videos & Save Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Travel Guides
                </h2>
                <div className="space-y-4">
                  {MOCK_VIDEOS.map((video, i) =>
                <GlassCard
                  key={i}
                  hoverEffect
                  className="p-4 flex gap-4 items-center group cursor-pointer">

                      <div className="w-32 h-20 bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900" />
                        <PlayCircle className="w-8 h-8 text-white/80 relative z-10 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white group-hover:text-[#00d4aa] transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {video.views} views • {video.duration}
                        </p>
                      </div>
                    </GlassCard>
                )}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  My Collection
                </h2>
                <GlassCard className="p-6">
                  {isSaved ?
                <div className="text-center py-8">
                      <div className="w-16 h-16 bg-[#00d4aa]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bookmark className="w-8 h-8 text-[#00d4aa] fill-current" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Saved to Favourites!
                      </h3>
                      <p className="text-gray-400 mb-6">
                        You can view this country in your collection anytime.
                      </p>
                      <Link to="/favourites">
                        <GlowButton variant="secondary" className="w-full">
                          View Collection
                        </GlowButton>
                      </Link>
                    </div> :

                <form onSubmit={handleSave} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Personal Notes
                        </label>
                        <textarea
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:border-[#00d4aa] outline-none min-h-[100px]"
                      placeholder="What do you want to remember about this place?"
                      value={saveNotes}
                      onChange={(e) => setSaveNotes(e.target.value)} />

                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <input
                      type="checkbox"
                      id="visited"
                      className="w-4 h-4 rounded border-gray-600 text-[#00d4aa] focus:ring-[#00d4aa] bg-white/5" />

                        <label
                      htmlFor="visited"
                      className="text-sm text-gray-300">

                          I have visited this place
                        </label>
                      </div>

                      <GlowButton className="w-full">
                        <Heart className="w-4 h-4 mr-2" /> Save to Favourites
                      </GlowButton>
                    </form>
                }
                </GlassCard>
              </div>
            </div>
          </div> :
        null}
      </main>
    </div>);

}