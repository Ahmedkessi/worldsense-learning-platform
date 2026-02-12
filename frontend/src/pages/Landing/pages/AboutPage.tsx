import React from 'react';
import { StarBackground } from '../components/StarBackground';
import { GlassCard } from '../components/ui/GlassCard';
import DeveloperImage from "../../../assets/DeveloperImage.jpg";
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Code, Database, Globe, InfoIcon, Phone, Mails } from 'lucide-react';
export function AboutPage() {
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
          <Link
            to="/home"
            className="text-sm font-medium text-[#00d4aa] hover:text-white transition-colors">

            Back to App
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-12 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00d4aa] to-blue-600 mx-auto mb-6 p-1">
            <div className="w-full h-full rounded-full bg-[#0a0f1a] flex items-center justify-center overflow-hidden">
                <img src={DeveloperImage} alt="Developer" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built with <span className="text-[#00d4aa]">Passion</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            WorldSense is a project dedicated to making geography fun,
            accessible, and interactive for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Developer</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <InfoIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Name</h3>
                  <p className="text-sm text-gray-400">Ahmed Osman</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Number</h3>
                  <p className="text-sm text-gray-400">
                    +252 615666376
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="min-w-10 min-h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Globe className="min-w-5 min-h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Skills</h3>
                  <p className="text-sm text-gray-400">
                  HTML <span> | </span> CSS <span> | </span> SASS <span> | </span> Tailwind CSS <span> | </span> 
                  Styled Components <span> | </span>
                  JavaScript <span> | </span> React  <span> | </span> APIs
                  </p>
                 
                </div>
              </div>
            </div>
          </GlassCard>


          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Frontend</h3>
                  <p className="text-sm text-gray-400">
                  <ul>
                    <li>React (Hooks & component architecture)</li>
                    <li>Redux Toolkit for state management</li>
                    <li>React Router for navigation</li>
                    <li>Vite for development and build tooling</li>
                    <li>Modern JavaScript (ES6+)</li>
                  </ul>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Data</h3>
                  <p className="text-sm text-gray-400">                  
                  <ul>
                    <li>Leaflet & OpenStreetMap for interactive mapping</li>
                    <li>REST Countries API for country data</li>
                    <li>Weather APIs for live forecasts</li>
                    <li>Unsplash Image API for country images</li>
                    <li>YouTube Data v3 API for country videos</li>
                    <li>Quiz APIs</li>
                  </ul>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Design</h3>
                  <p className="text-sm text-gray-400">
                    Glassmorphism, Lucide Icons
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>



          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We believe that understanding our world is the first step towards
              connecting with it. WorldSense aims to bridge the gap between data
              and discovery, providing a platform where users can explore,
              learn, and track their global journey.
            </p>
            <div className="flex gap-4">
              <a
                target='_blank'
                href="https://github.com/Ahmedkessi"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">

                <Github className="w-5 h-5" />
              </a>
              <a
              target='_blank'
                href="https://wa.me/252615666376"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-green-400">
                <Mails className="w-5 h-5" />

              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-blue-600">

                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </GlassCard>
          


          <GlassCard className='p-8'>
<div></div>
          </GlassCard>
        </div>
         <GlassCard className='p-8'>
          <h2 className="text-2xl font-bold text-white mb-4">Platform</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            WorldSense is an interactive geography and data exploration platform that transforms global information into a clear, visual, and engaging experience.
            Users can explore countries through direct map interaction or smart search and instantly access structured insights including population, languages, currency, region details, real-time weather conditions, country descriptions, curated images, and related videos.
            The platform combines multiple external data sources into one cohesive interface to make learning about the world simple, fast, and practical.
            Built as a single-page application, WorldSense prioritizes performance, usability, and clean architecture to deliver a smooth and modern user experience.
            </p>
          </GlassCard>
          <br />
          <GlassCard className='p-8'>
            <h2 className="text-2xl font-bold text-white mb-4">Developer</h2>
            <p className='text-gray-400 max-w-2xl mx-auto"'>
            WorldSense was independently designed and developed by Ahmed Osman Ahmed, a student and front-end developer focused on building modern, scalable, and production-ready web applications.
            This project was planned, architected, and implemented end-to-end by one developer. From UI design and component structure to state management, API integrations, debugging, and performance optimization, every technical decision and line of code was executed personally.
            Artificial intelligence tools were used strictly for research, API exploration, and troubleshooting support, while all engineering and system design were completed independently.
            The development approach emphasizes clean architecture, maintainable code, strong user experience, and real-world engineering standards. WorldSense represents continuous growth, discipline, and practical software craftsmanship rather than a tutorial or team-built project.
            </p>
          </GlassCard>

          <footer className='mt-10 text-center text-gray-200 max-w-2xl mx-auto mb-[-20px]'>
          © {new Date().getFullYear()} WorldSense. Developed by Ahmed_Osman. All rights reserved.
          </footer>

      </main>
    </div>);

}