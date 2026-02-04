'use client';
import React from 'react';
import Starfield from '@/components/visuals/Starfield';
import Nebula from '@/components/visuals/Nebula';
import CursorGlow from '@/components/visuals/CursorGlow';
import NavBar from '@/components/sections/NavBar';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Cabins from '@/components/sections/Cabins';
import Events from '@/components/sections/Events';
import Crew from '@/components/sections/Crew';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* AVASYA Spacer */}
      <Starfield />
      <Nebula />
      <CursorGlow />
      <NavBar />
      <main className="relative">
        <Hero />
        <Mission />
        <Cabins />
        <Events />
        <Crew />
        <Contact />
      </main>

      <style>{`
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000; 
        }
        ::-webkit-scrollbar-thumb {
          background: #333; 
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #06b6d4; 
        }

        .mask-bottom {
            mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        }

        /* Shine Animation */
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        
        .animate-shine {
            animation: shine 1s;
        }
      `}</style>
    </div>
  );
}