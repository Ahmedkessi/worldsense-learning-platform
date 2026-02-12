import React from 'react';
export function Globe() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] perspective-1000">
      <style>{`
        @keyframes orbit {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes counter-rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .orbit-container {
          transform-style: preserve-3d;
          animation: orbit 30s linear infinite;
        }
        .satellite {
          transform-style: preserve-3d;
          animation: counter-rotate 30s linear infinite;
        }
      `}</style>

      {/* Central Globe */}
      <div className="absolute inset-0 m-auto w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-600 via-blue-900 to-[#0a0f1a] shadow-[0_0_60px_rgba(0,100,255,0.4)] overflow-hidden">
        {/* Globe Grid Texture Simulation */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 opacity-20 border-[0.5px] border-white/20 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Continents (Abstract shapes) */}
        <div className="absolute top-1/4 left-1/4 w-12 h-8 bg-green-500/20 blur-sm rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-16 h-12 bg-green-500/20 blur-sm rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 w-20 h-10 bg-green-500/20 blur-sm rounded-full" />
      </div>

      {/* Orbit Rings */}
      <div className="absolute inset-0 m-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-white/5 rounded-full rotate-x-75" />
      <div className="absolute inset-0 m-auto w-[250px] h-[250px] md:w-[320px] md:h-[320px] border border-white/5 rounded-full rotate-x-75 rotate-y-45" />

      {/* Orbiting Elements Container */}
      <div className="absolute inset-0 m-auto w-full h-full orbit-container">
        {/* Satellite 1: Japan */}
        <div
          className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-32 h-auto"
          style={{
            transform: 'translateZ(0px)'
          }}>

          <div className="satellite p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-2xl">🇯🇵</span>
            <div>
              <p className="text-xs text-gray-300 font-medium">Japan</p>
              <p className="text-[10px] text-cyan-400">Tokyo</p>
            </div>
          </div>
        </div>

        {/* Satellite 2: France */}
        <div
          className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-auto"
          style={{
            transform: 'translateZ(0px)'
          }}>

          <div className="satellite p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-2xl">🇫🇷</span>
            <div>
              <p className="text-xs text-gray-300 font-medium">France</p>
              <p className="text-[10px] text-cyan-400">Paris</p>
            </div>
          </div>
        </div>

        {/* Satellite 3: Brazil */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-auto"
          style={{
            transform: 'translateZ(0px)'
          }}>

          <div className="satellite p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-2xl">🇧🇷</span>
            <div>
              <p className="text-xs text-gray-300 font-medium">Brazil</p>
              <p className="text-[10px] text-cyan-400">Brasília</p>
            </div>
          </div>
        </div>

        {/* Satellite 4: Australia */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-auto"
          style={{
            transform: 'translateZ(0px)'
          }}>

          <div className="satellite p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-2xl">🇦🇺</span>
            <div>
              <p className="text-xs text-gray-300 font-medium">Australia</p>
              <p className="text-[10px] text-cyan-400">Canberra</p>
            </div>
          </div>
        </div>
      </div>
    </div>);

}