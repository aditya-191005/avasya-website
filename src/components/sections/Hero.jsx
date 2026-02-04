'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section from '@/components/ui/Section';
import Planet from '@/components/visuals/Planet';
import { fadeInUp } from '@/utils/animations';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const planetY = useTransform(scrollY, [0, 800], [0, 300]);

    return (
        <Section className="items-center text-center h-screen relative overflow-visible">

            {/* Hero Planet: Realistic Gas Giant (Blue) */}
            <motion.div style={{ y: planetY }} className="absolute -right-20 md:right-[5%] top-[15%] opacity-90 pointer-events-none z-0">
                <Planet
                    imgUrl="https://images.unsplash.com/photo-1614730341194-75c60740a060?auto=format&fit=crop&q=80&w=800"
                    size="450px"
                    className="blur-[0.5px]"
                />
            </motion.div>

            <motion.div style={{ y: y1 }} className="relative z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative inline-block"
                >
                    <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        AVASYA
                    </h1>
                    {/* Enhanced Glow Effect */}
                    <div className="absolute -inset-10 bg-cyan-500/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                </motion.div>

                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-lg md:text-xl text-cyan-200/80 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
                >
                    Pioneering the next frontier of interstellar exploration.
                    We are the architects of the cosmos, bridging the gap between humanity and the stars.
                </motion.p>
            </motion.div>

            <motion.div
                style={{ y: y2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer z-10"
                onClick={() => document.getElementById('mission').scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">Initiate Launch</span>
                <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce" />
            </motion.div>
        </Section>
    );
};

export default Hero;
