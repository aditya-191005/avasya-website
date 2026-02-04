'use client';
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TeamMember = ({ name, role, quote, img, linkedin, email }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="relative w-32 h-32 mb-4 group cursor-pointer">
            <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md group-hover:blur-xl transition-all duration-500 group-hover:animate-pulse" />
            {/* Animated ring on hover */}
            <div className="absolute inset-[-4px] rounded-full border-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-500 scale-100 group-hover:scale-110" />

            <img
                src={img || "/api/placeholder/150/150"}
                alt={name}
                className="relative w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-cyan-400 transition-colors"
            />
        </div>
        <h4 className="text-lg font-bold text-white">{name}</h4>
        <span className="text-cyan-400 text-xs uppercase tracking-wider mb-2">{role}</span>

        <div className="flex gap-3 mt-3">
            {linkedin ? (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                </a>
            ) : (
                <Linkedin className="w-4 h-4 text-gray-400/50 cursor-not-allowed" />
            )}

            {email ? (
                <a href={`mailto:${email}`}>
                    <Mail className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                </a>
            ) : (
                <Mail className="w-4 h-4 text-gray-400/50 cursor-not-allowed" />
            )}
        </div>
    </div>
);

export default TeamMember;
