import React from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
const favourites = [
{
  name: 'Iceland',
  flag: '🇮🇸',
  region: 'Europe',
  temp: '-2°C',
  image: 'bg-gradient-to-br from-blue-200 to-blue-400'
},
{
  name: 'New Zealand',
  flag: '🇳🇿',
  region: 'Oceania',
  temp: '18°C',
  image: 'bg-gradient-to-br from-green-300 to-emerald-600'
},
{
  name: 'Japan',
  flag: '🇯🇵',
  region: 'Asia',
  temp: '12°C',
  image: 'bg-gradient-to-br from-red-200 to-pink-400'
},
{
  name: 'Peru',
  flag: '🇵🇪',
  region: 'South America',
  temp: '22°C',
  image: 'bg-gradient-to-br from-yellow-200 to-orange-400'
}];

export function Favourites() {
  return (
    <section className="relative py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Your <span className="text-[#00d4aa]">Collection</span>
            </h2>
            <p className="text-gray-400">
              Places you've saved for your next adventure.
            </p>
          </div>
          <button className="text-[#00d4aa] hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            View All Saved <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favourites.map((country, index) =>
          <GlassCard key={index} hoverEffect className="group cursor-pointer">
              {/* Image Placeholder */}
              <div className={`h-40 w-full ${country.image} relative`}>
                <div className="absolute top-3 right-3">
                  <button className="p-2 rounded-full bg-black/20 backdrop-blur-md hover:bg-red-500/20 transition-colors group/heart">
                    <Heart className="w-4 h-4 text-white group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-4xl">{country.flag}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {country.name}
                  </h3>
                  <span className="text-xs font-mono text-[#00d4aa] bg-[#00d4aa]/10 px-2 py-1 rounded">
                    {country.temp}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{country.region}</p>

                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-gray-500">View Details</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </section>);

}