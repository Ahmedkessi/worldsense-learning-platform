import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from './Globe';
import { GlowButton } from './GlowButton';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
              Live Global Tracking
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
            Discover Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4aa] to-blue-500">
              World
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Immerse yourself in the geography, culture, and pulse of the planet.
            Track real-time data, explore hidden gems, and master your knowledge
            of the globe.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link to="/home">
              <GlowButton icon>Start Exploring</GlowButton>
            </Link>
            <Link to="/Signup">
              <GlowButton variant="secondary">Play Quiz</GlowButton>
            </Link>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">195+</span> Countries
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">10k+</span> Cities
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">24/7</span> Live Data
            </div>
          </div>
        </div>

        {/* Globe Visualization */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-auto perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00d4aa]/20 to-purple-500/20 blur-[100px] opacity-30 rounded-full" />
          <Globe />
        </div>
      </div>
    </section>);

}