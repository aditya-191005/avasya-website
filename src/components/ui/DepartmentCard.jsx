'use client';
import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import { fadeInUp } from '@/utils/animations';

const DepartmentCard = ({ name, title, description, icon: Icon, color, link }) => {
    return (
        <motion.div
            variants={fadeInUp}
            className="relative group h-full"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Glow Behind */}
            <div className={`absolute -inset-0.5 bg-gradient-to-b ${color} to-transparent rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition duration-500`} />

            {/* Card Container */}
            <div className="relative h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group-hover:border-white/20 transition-colors duration-300">

                {/* Tech Grid Background */}
                <div className="absolute inset-0 z-0 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />

                {/* Scanning Light Bar Effect */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-50 top-0 group-hover:animate-scan-down z-10 block" />

                {/* Top Banner / Color Strip */}
                <div className={`h-1 w-full bg-gradient-to-r ${color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="p-8 relative z-10 flex flex-col flex-grow">
                    <div className="mb-6 flex justify-between items-start">
                        {/* Icon Container with Glow */}
                        <div className={`relative p-3 rounded-xl border border-white/10 overflow-hidden group-hover:border-white/30 transition-all duration-300`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-30 transition-opacity`} />
                            <Icon className="relative z-10 w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
                        </div>

                        {/* Tech Label */}
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-gray-500 font-mono">ID_MOD</span>
                            <span className={`text-xs font-bold font-mono uppercase bg-clip-text text-transparent bg-gradient-to-r ${color}`}>
                                {title}
                            </span>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                        <GlitchText text={name} className="group-hover:text-cyan-200" />
                    </h3>

                    {/* Divider Line */}
                    <div className="w-12 h-0.5 bg-white/10 mb-6 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-white/20 group-hover:to-transparent transition-all duration-500" />

                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-sans">
                        {description}
                    </p>

                    {/* Action Area */}
                    <div className="mt-auto">
                        <a
                            href={link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative w-full overflow-hidden rounded-lg bg-white/5 border border-white/10 px-4 py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/50"
                        >
                            <span className="relative z-10 font-mono text-sm font-bold text-gray-300 group-hover/btn:text-white tracking-widest">
                                INITIATE_JOIN
                            </span>

                            {/* Arrow Animation */}
                            <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded bg-black/50 group-hover/btn:bg-cyan-500 group-hover/btn:text-black transition-all duration-300">
                                <span className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300">➜</span>
                            </div>

                            {/* Hover Fill Background */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300`} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DepartmentCard;
