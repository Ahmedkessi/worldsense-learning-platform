import React from 'react';
import { Globe2, Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#05080f] pt-16 pb-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Globe2 className="w-8 h-8 text-[#00d4aa]" />
              <span className="text-2xl font-bold text-white">WorldSense</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Discover the world through data, imagery, and interactive
              experiences. Your gateway to global knowledge.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-[#00d4aa] cursor-pointer transition-colors">
                Countries
              </li>
              <li className="hover:text-[#00d4aa] cursor-pointer transition-colors">
                Live Map
              </li>
              <li className="hover:text-[#00d4aa] cursor-pointer transition-colors">
                Quizzes
              </li>
              <li className="hover:text-[#00d4aa] cursor-pointer transition-colors">
                Leaderboard
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <Link to={`/About`} className="hover:text-[#00d4aa] cursor-pointer transition-colors">
                About Us
              </Link>
              <li className="hover:text-[#00d4aa] cursor-pointer transition-colors">
                API
              </li>
              <li className="hover:text-[#00d4aa] cursor-pointer transition-colors">
                Privacy
              </li>
              <li className="hover:text-[#00d4aa] cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 WorldSense. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>);

}