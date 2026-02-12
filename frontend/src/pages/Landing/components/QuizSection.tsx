import React from 'react';
import { Trophy, Star, Award, Target } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { GlowButton } from './GlowButton';
export function QuizSection() {
  return (
    <section className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00d4aa]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Test Your <span className="text-[#00d4aa]">Knowledge</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Challenge yourself with daily geography quizzes. Earn XP, unlock
              badges, and climb the global leaderboard.
            </p>

            {/* Level Progress */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <span className="text-sm text-gray-400 uppercase tracking-wider">
                    Current Level
                  </span>
                  <div className="text-3xl font-bold text-white mt-1">
                    Explorer Lvl. 4
                  </div>
                </div>
                <div className="text-[#00d4aa] font-mono">2,450 / 3,000 XP</div>
              </div>

              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#00d4aa] to-blue-500 w-[82%] relative">
                  <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/50 animate-pulse" />
                </div>
              </div>
            </div>

            <GlowButton>Start Daily Challenge</GlowButton>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center shadow-[0_0_20px_rgba(255,165,0,0.3)]">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Capital Master</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Identify 50 capitals
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(100,100,255,0.3)]">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Flag Expert</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Perfect score streak
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors opacity-50 grayscale">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center border border-white/10">
                <Award className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <h3 className="text-gray-300 font-bold">Globetrotter</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Visit 20 virtual countries
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors opacity-50 grayscale">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center border border-white/10">
                <Target className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <h3 className="text-gray-300 font-bold">Precision</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Pinpoint location &lt;10km
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>);

}