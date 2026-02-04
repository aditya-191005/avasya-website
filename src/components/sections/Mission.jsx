'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Telescope, Rocket, Code, Users, Terminal, Globe } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Planet from '@/components/visuals/Planet';
import SpaceDebris from '@/components/visuals/SpaceDebris';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Mission = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const items = [
        { title: "Research", icon: Telescope, desc: "Pushing boundaries in astrophysics and orbital mechanics simulation." },
        { title: "Projects", icon: Rocket, desc: "Building tangible prototypes, from rover chassis to propulsion algorithms." },
        { title: "Applications", icon: Code, desc: "Developing software for trajectory analysis and celestial mapping." },
        { title: "Workshops", icon: Users, desc: "Training the next generation of engineers with hands-on CAD and electronics." },
        { title: "Hackathons", icon: Terminal, desc: "24-hour sprints solving interstellar logistic and survival challenges." },
        { title: "Meetups", icon: Globe, desc: "In-person gatherings to debate Fermi paradox and colonization strategies." },
    ];

    return (
        <Section id="mission">
            {/* Background Rocky Planet (Mars-like) */}
            <div className="absolute left-[-100px] top-[10%] opacity-70 pointer-events-none z-0">
                <Planet
                    imgUrl="https://images.unsplash.com/photo-1614728853980-40bc485e4986?auto=format&fit=crop&q=80&w=800"
                    size="300px"
                    className="blur-[1px]"
                />
            </div>

            {/* Background Moon */}
            <div className="absolute left-[150px] top-[5%] opacity-40 pointer-events-none z-0">
                <Planet
                    imgUrl="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80&w=400"
                    size="80px"
                    className="blur-[2px]"
                />
            </div>

            <SpaceDebris />

            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="relative z-10 w-full max-w-7xl mx-auto"
            >
                <motion.div variants={fadeInUp} className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, i) => (
                        <Card key={i} {...item} />
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};

export default Mission;
