'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Telescope, Plane } from 'lucide-react';
import Section from '@/components/ui/Section';
import DepartmentCard from '@/components/ui/DepartmentCard';
import Planet from '@/components/visuals/Planet';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Cabins = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <Section id="cabins">
            {/* Background Ice Planet (Neptune-like) */}
            <div className="absolute right-[-50px] bottom-[5%] opacity-60 pointer-events-none z-0">
                <Planet
                    imgUrl="https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&q=80&w=800"
                    size="350px"
                    className="blur-[1px]"
                />
            </div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="relative z-10 max-w-7xl mx-auto w-full"
            >
                <div className="mb-16 md:flex justify-between items-end">
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Cabins</h2>
                        <p className="text-gray-400 max-w-md">Our specialized departments powering the innovation engine of AVASYA.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <DepartmentCard
                        title="Aerospace"
                        name="Satish Dhawan Dept. of Aerospace"
                        description="A cabin where bold ideas take flight. We dive into rockets, satellites, spacecraft, and launch systems through collaborative research, simulations, and projects on propulsion, orbital mechanics, and mission design. Here, dream of designing future launch vehicles or exploring deep space missions, gets a launchpad."
                        icon={Rocket}
                        color="from-orange-500 to-red-500"
                        link="https://forms.gle/egfjDzGCXcR35NQY8"
                    />
                    <DepartmentCard
                        title="Astronomy"
                        name="Aryabhatta Dept. of Astronomy"
                        description="For those who have ever looked up and felt small yet infinite. We explore galaxies, planets, and cosmic wonders through discussions, observations, and data-driven missions. Here, curiosity turns into awe, and awe turns into a lifelong love for the universe."
                        icon={Telescope}
                        color="from-purple-500 to-pink-500"
                        link="https://forms.gle/egfjDzGCXcR35NQY8"
                    />
                    <DepartmentCard
                        title="Aviation"
                        name="JRD Tata Dept. of Aviation"
                        description="Where every conversation opens a window seat above the clouds. We unite aviation enthusiasts to discuss aircraft, airlines, airports, news, safety, technology, and careers. Here is your cabin to learn, share, and grow with a crew that loves the skies as much as you do."
                        icon={Plane}
                        color="from-blue-500 to-cyan-500"
                        link="https://forms.gle/egfjDzGCXcR35NQY8"
                    />
                </div>
            </motion.div>
        </Section>
    );
};

export default Cabins;
