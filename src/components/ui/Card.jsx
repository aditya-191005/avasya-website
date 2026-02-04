'use client';
import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import { fadeInUp } from '@/utils/animations';

const Card = ({ title, icon: Icon, description }) => {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl bg-black/40 border border-white/10 backdrop-blur-sm group relative overflow-hidden transition-all duration-300"
        >
            {/* Cyber scanning border effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>

            <div className="relative z-10">
                <div className="mb-6 p-4 bg-cyan-900/20 rounded-lg w-fit border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                    <Icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                    <GlitchText text={title} />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors font-light border-l border-white/10 pl-4">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default Card;
