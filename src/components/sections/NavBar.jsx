'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';
import GlitchText from '@/components/ui/GlitchText';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { name: "Mission", href: "#mission" },
        { name: "Cabins", href: "#cabins" },
        { name: "Events", href: "#events" },
        { name: "Crew", href: "#crew" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold tracking-widest text-white flex items-center gap-2"
                >
                    <Rocket className="text-cyan-400 w-6 h-6" />
                    AVASYA
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link, i) => (
                        <motion.a
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-cyan-400 uppercase tracking-wider transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                        href="https://forms.gle/hXEY8YQfU44BWbUBA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group bg-cyan-400 text-black font-bold uppercase tracking-widest hover:bg-cyan-300 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                        style={{
                            clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                            padding: '2px' // Spacer for the inner content
                        }}
                    >
                        <div className="relative bg-cyan-400 px-6 py-2 flex items-center justify-center overflow-hidden h-full w-full">
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-white/40 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out skew-x-[-20deg]" />

                            {/* Button Text */}
                            <GlitchText text="JOIN US" className="relative z-10 cursor-pointer text-black font-black" />
                        </div>
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-cyan-400 uppercase tracking-widest"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://forms.gle/hXEY8YQfU44BWbUBA"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 relative group bg-cyan-400 text-black font-bold uppercase tracking-widest text-center shadow-[0_0_15px_rgba(34,211,238,0.3)] block"
                                style={{
                                    clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)"
                                }}
                            >
                                <div className="relative bg-cyan-400 px-6 py-3 overflow-hidden">
                                    <div className="absolute inset-0 bg-white/40 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out skew-x-[-20deg]" />
                                    <GlitchText text="JOIN US" className="relative z-10 cursor-pointer text-black font-black" />
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
