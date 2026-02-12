import React from 'react';
import { ArrowRight } from 'lucide-react';
interface GlowButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
}
export function GlowButton({
  children,
  variant = 'primary',
  icon = false,
  className = '',
  ...props
}: GlowButtonProps) {
  const baseStyles =
  'relative inline-flex items-center justify-center px-8 py-3 font-medium transition-all duration-300 rounded-full group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0f1a]';
  const variants = {
    primary:
    'bg-[#00d4aa] text-[#0a0f1a] hover:bg-[#00c29a] shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:shadow-[0_0_30px_rgba(0,212,170,0.6)] hover:scale-105',
    secondary:
    'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon &&
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        }
      </span>
    </button>);

}