import React from 'react';
import {
  MapPin,
  Globe2,
  CloudSun,
  Image as ImageIcon,
  PlayCircle,
  Zap } from
'lucide-react';
import { GlassCard } from './ui/GlassCard';
const features = [
{
  icon: MapPin,
  title: 'Geolocation Detection',
  description:
  'Instantly identify your location and discover interesting facts about your immediate surroundings.',
  color: 'text-red-400'
},
{
  icon: Globe2,
  title: 'Country Information',
  description:
  'Detailed demographics, cultural insights, and economic data for every nation on Earth.',
  color: 'text-blue-400'
},
{
  icon: CloudSun,
  title: 'Weather Integration',
  description:
  'Real-time weather updates and forecasts visualized beautifully for any coordinate.',
  color: 'text-yellow-400'
},
{
  icon: ImageIcon,
  title: 'Curated Imagery',
  description:
  'Stunning high-resolution photography from Unsplash capturing the essence of each location.',
  color: 'text-purple-400'
},
{
  icon: PlayCircle,
  title: 'Video Tours',
  description:
  'Immersive video content bringing the sights and sounds of distant places to your screen.',
  color: 'text-pink-400'
},
{
  icon: Zap,
  title: 'Interactive Quizzes',
  description:
  'Test your geography knowledge and earn XP as you explore new regions.',
  color: 'text-[#00d4aa]'
}];

export function Features() {
  return (
    <section className="relative py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to{' '}
            <span className="text-[#00d4aa]">Explore</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful tools and rich data integration to provide a complete
            picture of our world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) =>
          <GlassCard key={index} hoverEffect className="p-6 group">
              <div
              className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>

                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          )}
        </div>
      </div>
    </section>);

}