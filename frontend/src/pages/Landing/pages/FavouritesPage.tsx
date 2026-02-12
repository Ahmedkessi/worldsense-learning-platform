import React, { useState } from 'react';
import { StarBackground } from '../components/StarBackground';
import { GlassCard } from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Trash2,
  Edit2,
  MapPin,
  Calendar,
  ArrowLeft } from
'lucide-react';
const MOCK_FAVOURITES = [
{
  id: 1,
  name: 'Iceland',
  flag: '🇮🇸',
  region: 'Europe',
  savedDate: '2023-11-15',
  visited: true,
  notes: 'Amazing northern lights!',
  rating: 5,
  image: 'bg-gradient-to-br from-blue-200 to-blue-400'
},
{
  id: 2,
  name: 'New Zealand',
  flag: '🇳🇿',
  region: 'Oceania',
  savedDate: '2023-12-02',
  visited: false,
  notes: 'Bucket list destination.',
  rating: 0,
  image: 'bg-gradient-to-br from-green-300 to-emerald-600'
},
{
  id: 3,
  name: 'Japan',
  flag: '🇯🇵',
  region: 'Asia',
  savedDate: '2024-01-10',
  visited: true,
  notes: 'Best food ever.',
  rating: 5,
  image: 'bg-gradient-to-br from-red-200 to-pink-400'
},
{
  id: 4,
  name: 'Peru',
  flag: '🇵🇪',
  region: 'South America',
  savedDate: '2024-02-20',
  visited: false,
  notes: 'Machu Picchu hike planning.',
  rating: 0,
  image: 'bg-gradient-to-br from-yellow-200 to-orange-400'
}];

export function FavouritesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favourites, setFavourites] = useState(MOCK_FAVOURITES);
  const filteredFavs = favourites.filter(
    (fav) =>
    fav.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fav.region.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDelete = (id: number) => {
    setFavourites(favourites.filter((fav) => fav.id !== id));
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
              to="/home"
              className="text-sm text-gray-300 hover:text-white transition-colors">

              Explore
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <Link
              to="/home"
              className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors">

              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Explore
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Your Collection{' '}
              <span className="text-[#00d4aa] text-lg align-top ml-2 bg-[#00d4aa]/10 px-2 py-1 rounded-full">
                {favourites.length}
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search saved places..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:border-[#00d4aa] focus:ring-1 focus:ring-[#00d4aa] outline-none" />

              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <Filter className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {filteredFavs.length === 0 ?
        <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              No places found
            </h3>
            <p className="text-gray-400 mb-6">
              Start exploring to add countries to your collection.
            </p>
            <Link
            to="/home"
            className="inline-flex items-center px-6 py-3 bg-[#00d4aa] text-[#0a0f1a] rounded-full font-medium hover:bg-[#00c29a] transition-colors">

              Start Exploring
            </Link>
          </div> :

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFavs.map((country) =>
          <GlassCard
            key={country.id}
            hoverEffect
            className="group flex flex-col h-full">

                <div className={`h-40 w-full ${country.image} relative p-6`}>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-black/20 backdrop-blur-md rounded-lg hover:bg-black/40 text-white transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                  onClick={() => handleDelete(country.id)}
                  className="p-2 bg-black/20 backdrop-blur-md rounded-lg hover:bg-red-500/80 text-white transition-colors">

                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-5xl drop-shadow-lg">
                      {country.flag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {country.name}
                    </h3>
                    {country.visited &&
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#00d4aa] text-[#0a0f1a] px-2 py-1 rounded-full">
                        Visited
                      </span>
                }
                  </div>

                  <p className="text-gray-400 text-sm mb-4 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {country.region}
                  </p>

                  <div className="bg-white/5 rounded-lg p-3 mb-4 flex-1">
                    <p className="text-sm text-gray-300 italic">
                      "{country.notes}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Saved {country.savedDate}
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) =>
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${i < country.rating ? 'bg-yellow-400' : 'bg-gray-700'}`} />

                  )}
                    </div>
                  </div>
                </div>
              </GlassCard>
          )}
          </div>
        }
      </main>
    </div>);

}