import React from 'react';
export function StarBackground() {
  // Generate random stars for a static effect that twinkles
  // In a real app we might use canvas, but for this CSS approach:
  const stars = Array.from({
    length: 50
  }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2
  }));
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0f1a]">
      {/* Base gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05080f] via-[#0a0f1a] to-[#0f1623]" />

      {/* Stars */}
      {stars.map((star) =>
      <div
        key={star.id}
        className="absolute rounded-full bg-white animate-pulse"
        style={{
          top: star.top,
          left: star.left,
          width: `${star.size}px`,
          height: `${star.size}px`,
          opacity: Math.random() * 0.7 + 0.3,
          animationDelay: `${star.delay}s`,
          animationDuration: `${star.duration}s`
        }} />

      )}

      {/* Subtle nebula glow effects */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]" />
    </div>);

}