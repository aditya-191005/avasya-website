'use client';
import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const EventCard = forwardRef(({ event }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            ref={ref}
            layout
            onClick={() => setIsOpen(!isOpen)}
            className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-colors group ${isOpen ? 'col-span-1 md:col-span-2 row-span-2' : ''}`}
        >
            <motion.div layout className="relative h-48 bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors" />

                {/* CRT Scanline effect on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[5] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <img
                    src={event.img || "/images/event-placeholder.svg"}
                    onError={(e) => { e.target.onerror = null; e.target.src = "/images/event-placeholder.svg" }}
                    alt="Event"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-cyan-400 border border-cyan-500/30 z-20">
                    {event.date}
                </div>
            </motion.div>

            <motion.div layout className="p-6">
                <div className="flex justify-between items-center mb-2">
                    <motion.h3 layout className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{event.name}</motion.h3>
                    {!isOpen && <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />}
                </div>
                <motion.p layout className="text-gray-400 text-sm mb-4">{event.shortDesc}</motion.p>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="pt-4 border-t border-white/10"
                        >
                            <div className="flex items-center gap-2 text-cyan-300 text-sm mb-4">
                                <MapPin className="w-4 h-4" /> {event.venue}
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                {event.longDesc}
                            </p>
                            <div className="flex gap-2">
                                {event.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-400">#{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
});

EventCard.displayName = 'EventCard';

export default EventCard;
