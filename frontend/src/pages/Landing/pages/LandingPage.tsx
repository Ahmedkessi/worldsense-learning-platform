import logo_title from "../../../../public/logo_title.png";

import { Link } from 'react-router-dom';
import { StarBackground } from '../components/StarBackground';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { QuizSection } from '../components/QuizSection';
import { Favourites } from '../components/Favourites';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white selection:bg-[#00d4aa] selection:text-[#0a0f1a]">
      <StarBackground />

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0f1a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#00d4aa33] to-grey-600 flex items-center justify-center">
                <img className='w-full' src={logo_title} alt="logo" />
            </div>
            <span className="text-xl font-bold tracking-tight">WorldSense</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link to="/home" className="hover:text-white transition-colors">
              Explore
            </Link>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link to="/Signup">
              <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <QuizSection />
        <Favourites />
      </main>

      <Footer />
    </div>);

}