'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Globe, Instagram } from 'lucide-react';
import Section from '@/components/ui/Section';
import Planet from '@/components/visuals/Planet';
import GlitchText from '@/components/ui/GlitchText';

const Contact = () => {
    return (
        <Section id="contact" className="min-h-[80vh]">
            {/* Background Dark Planet/Moon */}
            <div className="absolute right-[10%] top-[20%] opacity-40 pointer-events-none z-0">
                <Planet
                    imgUrl="https://images.unsplash.com/photo-1545156524-814d64233767?auto=format&fit=crop&q=80&w=800"
                    size="150px"
                    className="blur-[0.5px]"
                />
            </div>

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-6">Reach Us</h2>
                    <p className="text-gray-400">Join the frequency. Send us a transmission.</p>
                </div>

                <div className="flex flex-col items-center justify-center min-h-[40vh] gap-12">
                    <div className="flex justify-center gap-8">
                        <motion.a
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/company/theaeroclub/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-white/5 rounded-full hover:bg-[#0077b5]/20 cursor-pointer transition-all border border-white/5 hover:border-[#0077b5]/50 shadow-[0_0_10px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]"
                        >
                            <Linkedin className="text-white w-6 h-6 transition-all duration-300 group-hover:text-[#0077b5]" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.instagram.com/aeroclub.iitmbs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-white/5 rounded-full hover:bg-[#E4405F]/20 cursor-pointer transition-all border border-white/5 hover:border-[#E4405F]/50 shadow-[0_0_10px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(228,64,95,0.3)]"
                        >
                            <Instagram className="text-white w-6 h-6 transition-all duration-300 group-hover:text-[#E4405F]" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:aeroclub.iitmbs@gmail.com"
                            className="group p-4 bg-white/5 rounded-full hover:bg-[#EA4335]/20 cursor-pointer transition-all border border-white/5 hover:border-[#EA4335]/50 shadow-[0_0_10px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(234,67,53,0.3)]"
                        >
                            <Mail className="text-white w-6 h-6 transition-all duration-300 group-hover:text-[#EA4335]" />
                        </motion.a>
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-4 w-full text-center text-gray-600 text-xs uppercase tracking-widest">
                © 2025 AVASYA Society. All Systems Nominal.
            </footer>
        </Section>
    )
}

export default Contact;
