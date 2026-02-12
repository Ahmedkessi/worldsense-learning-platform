import React from 'react';
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}
export function GlassCard({
  children,
  className = '',
  hoverEffect = false
}: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
        ${hoverEffect ? 'transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,212,170,0.1)]' : ''}
        max-sm:${className}
        px-3.5 py-6
      `}>

      {children}
    </div>);

}