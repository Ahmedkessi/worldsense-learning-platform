import React, { useState, Component } from 'react';
import { StarBackground } from '../components/StarBackground';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/GlowButton';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Flame,
  Brain,
  Target,
  Lock,
  Unlock,
  Settings,
  LogOut,
  User,
  ChevronRight,
  BookOpen,
  CheckCircle,
  XCircle } from
'lucide-react';
// Types
type ViewState = 'auth' | 'dashboard' | 'learn' | 'profile';
type AuthMode = 'login' | 'signup';
export function QuizPage() {
  const [view, setView] = useState<ViewState>('auth');
  const [authMode, setAuthMode] = useState<AuthMode>('signup');
  const [user, setUser] = useState({
    name: 'Explorer',
    level: 4,
    xp: 2450,
    streak: 7
  });
  // Auth View Component
  const AuthView = () =>
  <div className="max-w-md mx-auto pt-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to WorldSense Quiz
        </h1>
        <p className="text-gray-400">Master geography and earn rewards.</p>
      </div>

      <GlassCard className="p-8">
        <div className="flex border-b border-white/10 mb-6">
          <button
          className={`flex-1 pb-3 text-sm font-medium transition-colors ${authMode === 'signup' ? 'text-[#00d4aa] border-b-2 border-[#00d4aa]' : 'text-gray-400 hover:text-white'}`}
          onClick={() => setAuthMode('signup')}>

            Sign Up
          </button>
          <button
          className={`flex-1 pb-3 text-sm font-medium transition-colors ${authMode === 'login' ? 'text-[#00d4aa] border-b-2 border-[#00d4aa]' : 'text-gray-400 hover:text-white'}`}
          onClick={() => setAuthMode('login')}>

            Log In
          </button>
        </div>

        <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setView('dashboard');
        }}>

          {authMode === 'signup' &&
        <div>
              <label className="block text-xs text-gray-400 mb-1 uppercase">
                Username
              </label>
              <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#00d4aa] outline-none"
            placeholder="Choose a username" />

            </div>
        }
          <div>
            <label className="block text-xs text-gray-400 mb-1 uppercase">
              Email
            </label>
            <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#00d4aa] outline-none"
            placeholder="Enter your email" />

          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1 uppercase">
              Password
            </label>
            <input
            type="password"
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#00d4aa] outline-none"
            placeholder="••••••••" />

          </div>

          <GlowButton className="w-full mt-6">
            {authMode === 'signup' ? 'Create Account' : 'Start Playing'}
          </GlowButton>
        </form>

        <div className="mt-6 text-center">
          <button className="text-xs text-gray-500 hover:text-[#00d4aa] transition-colors">
            Forgot password? View saved accounts
          </button>
        </div>
      </GlassCard>
    </div>;

  // Dashboard View Component
  const DashboardView = () =>
  <div className="space-y-8">
      {/* Stats Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard className="p-4 flex items-center gap-4 bg-gradient-to-r from-blue-900/20 to-transparent">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase">
              Level {user.level}
            </p>
            <p className="text-xl font-bold text-white">{user.xp} XP</p>
          </div>
        </GlassCard>
        <GlassCard className="p-4 flex items-center gap-4 bg-gradient-to-r from-orange-900/20 to-transparent">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase">Daily Streak</p>
            <p className="text-xl font-bold text-white">{user.streak} Days</p>
          </div>
        </GlassCard>
        <GlassCard
        className="p-4 flex items-center gap-4 bg-gradient-to-r from-purple-900/20 to-transparent cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => setView('learn')}>

          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase">Learn Progress</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2 w-32">
              <div className="h-full bg-purple-500 rounded-full w-[60%]" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Categories */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Quiz Categories</h2>
          <div className="flex bg-white/5 rounded-lg p-1">
            <button className="px-3 py-1 bg-[#00d4aa] text-[#0a0f1a] rounded text-xs font-bold">
              Easy
            </button>
            <button className="px-3 py-1 text-gray-400 hover:text-white rounded text-xs font-medium flex items-center gap-1">
              Medium <Lock className="w-3 h-3" />
            </button>
            <button className="px-3 py-1 text-gray-400 hover:text-white rounded text-xs font-medium flex items-center gap-1">
              Hard <Lock className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
        'General Knowledge',
        'Capitals',
        'Flags',
        'Landmarks',
        'Culture',
        'Cuisine'].
        map((cat, i) =>
        <GlassCard key={i} hoverEffect className="p-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-[#00d4aa]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{cat}</h3>
              <p className="text-sm text-gray-400 mb-4">
                10 Questions • +50 XP
              </p>
              <div className="flex items-center text-[#00d4aa] text-sm font-medium">
                Play Now{' '}
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </GlassCard>
        )}
        </div>
      </div>
    </div>;

  // Learn View Component
  const LearnView = () =>
  <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <button
        onClick={() => setView('dashboard')}
        className="p-2 bg-white/5 rounded-full hover:bg-white/10">

          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h2 className="text-2xl font-bold text-white">Learning Path</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-400">12</p>
          <p className="text-xs text-gray-400 uppercase">Learned</p>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-yellow-400">5</p>
          <p className="text-xs text-gray-400 uppercase">Learning</p>
        </div>
        <div className="bg-gray-500/10 border border-gray-500/20 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-gray-400">178</p>
          <p className="text-xs text-gray-500 uppercase">To Explore</p>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white border-l-4 border-yellow-400 pl-3">
          Currently Learning
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Brazil', 'Egypt'].map((country, i) =>
        <GlassCard
          key={i}
          className="p-4 flex items-center justify-between">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                  {country === 'Brazil' ? '🇧🇷' : '🇪🇬'}
                </div>
                <div>
                  <h4 className="font-bold text-white">{country}</h4>
                  <p className="text-xs text-gray-400">Progress: 40%</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-[#00d4aa]/10 text-[#00d4aa] rounded-lg text-sm font-bold hover:bg-[#00d4aa]/20">
                Master It
              </button>
            </GlassCard>
        )}
        </div>

        <h3 className="text-lg font-bold text-white border-l-4 border-gray-600 pl-3">
          Recommended
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Canada', 'Kenya'].map((country, i) =>
        <GlassCard
          key={i}
          className="p-4 flex items-center justify-between opacity-75 hover:opacity-100 transition-opacity">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                  {country === 'Canada' ? '🇨🇦' : '🇰🇪'}
                </div>
                <div>
                  <h4 className="font-bold text-white">{country}</h4>
                  <p className="text-xs text-gray-400">Not started</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white/5 text-white rounded-lg text-sm font-bold hover:bg-white/10 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Add
              </button>
            </GlassCard>
        )}
        </div>
      </div>
    </div>;

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

          {view !== 'auth' &&
          <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-300">
                <button
                onClick={() => setView('dashboard')}
                className={
                view === 'dashboard' ? 'text-[#00d4aa]' : 'hover:text-white'
                }>

                  Dashboard
                </button>
                <button
                onClick={() => setView('learn')}
                className={
                view === 'learn' ? 'text-[#00d4aa]' : 'hover:text-white'
                }>

                  Learn
                </button>
              </div>
              <div
              className="flex items-center gap-3 pl-6 border-l border-white/10 cursor-pointer"
              onClick={() => setView('profile')}>

                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-white">{user.name}</p>
                  <p className="text-xs text-[#00d4aa]">Lvl {user.level}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border-2 border-[#0a0f1a] shadow-lg" />
              </div>
            </div>
          }
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-12 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
        {view === 'auth' && <AuthView />}
        {view === 'dashboard' && <DashboardView />}
        {view === 'learn' && <LearnView />}
        {view === 'profile' &&
        <div className="max-w-2xl mx-auto">
            <button
            onClick={() => setView('dashboard')}
            className="mb-6 flex items-center text-gray-400 hover:text-white">

              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
            </button>
            <GlassCard className="p-8 text-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mx-auto mb-4 border-4 border-[#0a0f1a] shadow-xl" />
              <h2 className="text-2xl font-bold text-white">{user.name}</h2>
              <p className="text-gray-400">Joined March 2024</p>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-2xl font-bold text-white">42</p>
                  <p className="text-xs text-gray-500 uppercase">Games</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#00d4aa]">78%</p>
                  <p className="text-xs text-gray-500 uppercase">Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">#142</p>
                  <p className="text-xs text-gray-500 uppercase">Rank</p>
                </div>
              </div>
            </GlassCard>

            <div className="space-y-3">
              <button className="w-full p-4 bg-white/5 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors text-white">
                <span className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-gray-400" /> Settings
                </span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
              <button
              onClick={() => setView('auth')}
              className="w-full p-4 bg-red-500/10 rounded-xl flex items-center justify-between hover:bg-red-500/20 transition-colors text-red-400">

                <span className="flex items-center gap-3">
                  <LogOut className="w-5 h-5" /> Log Out
                </span>
              </button>
            </div>
          </div>
        }
      </main>
    </div>);

}