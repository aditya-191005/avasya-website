'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/ui/Section';
import EventCard from '@/components/ui/EventCard';
import Planet from '@/components/visuals/Planet';

const Events = () => {
    const [filter, setFilter] = useState('past');
    const [isExpanded, setIsExpanded] = useState(false);

    // ... (eventsData array remains the same)

    const eventsData = [
        {
            id: 25,
            name: "Stratohack 2.0",
            date: "Jan 10-11, 2026",
            type: "past",
            shortDesc: "Participants: 350+",
            longDesc: "The second edition of our premier stratospheric hackathon. Teams competed to design high-altitude balloon payloads under strict weight and power constraints.",
            venue: "Margazhi Tech Park",
            tags: ["hackathon", "engineering", "competition"],
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 24,
            name: "Settlement Design Challenge 3.0",
            date: "Jan 10-12, 2026",
            type: "past",
            shortDesc: "Participants: 400",
            longDesc: "Our largest design challenge yet. Participants designed self-sustaining colonies for Titan, focusing on energy generation and life support systems.",
            venue: "Main Auditorium",
            tags: ["design", "space-habitation", "crowd"],
            img: "https://images.unsplash.com/photo-1545569384-60316598045d?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 23,
            name: "SDC 2.0",
            date: "Sept 18-19, 2025",
            type: "past",
            shortDesc: "Participants: 323",
            longDesc: "The sequel to our popular Settlement Design Challenge. Teams tackled Martian colonization scenarios, presenting architectural and engineering solutions.",
            venue: "Lecture Hall Complex",
            tags: ["mars", "architecture", "challenge"],
            img: "https://images.unsplash.com/photo-1596524430883-9366e06b9b1e?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 22,
            name: "Stratohack",
            date: "Sept 17-20, 2025",
            type: "past",
            shortDesc: "Participants: 350",
            longDesc: "A 4-day hackathon focused on near-space exploration. Students built prototypes for weather monitoring and atmospheric data collection.",
            venue: "Innovation Hub",
            tags: ["hackathon", "atmosphere", "tech"],
            img: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 21,
            name: "Cosmic Courtroom",
            date: "July 26-27, 2025",
            type: "past",
            shortDesc: "Finalists: 10 | Audience: 150 (Live)",
            longDesc: "In collaboration with Veritas Society. A mock trial debating the legalities of asteroid mining and space treaties.",
            venue: "Moot Court Hall",
            tags: ["law", "debate", "collaboration"],
            img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 20,
            name: "Lumen Astrum – Workshop",
            date: "May 1, 2025",
            type: "past",
            shortDesc: "Participants: 80 (Peak)",
            longDesc: "In collaboration with IRIS Photography Society. A masterclass on astrophotography, covering exposure settings, stacking, and post-processing.",
            venue: "Open Air Theatre",
            tags: ["photography", "workshop", "iris"],
            img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 19,
            name: "Lumen Astrum – Creative Challenge",
            date: "Apr 19-29, 2025",
            type: "past",
            shortDesc: "Submissions: 37",
            longDesc: "A creative contest challenging participants to capture the night sky or create space-themed digital art. Winners were featured in the campus magazine.",
            venue: "Online Submission",
            tags: ["art", "contest", "creativity"],
            img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 18,
            name: "Mission Decrypt",
            date: "Apr 6-7, 2025",
            type: "past",
            shortDesc: "Registrations: 47 | Finalists: 10",
            longDesc: "Aerospace Codebreaker Challenge. Teams deciphered simulated alien signals and encrypted telemetry data from lost probes.",
            venue: "Computer Lab 3",
            tags: ["crypto", "coding", "puzzle"],
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 17,
            name: "She Spies",
            date: "Mar 8, 2025",
            type: "past",
            shortDesc: "Registrations: 60+ | Finals: 30",
            longDesc: "In collaboration with Kanha House. A special event celebrating women in espionage and aerospace surveillance technology.",
            venue: "Seminar Hall 2",
            tags: ["women-in-stem", "surveillance", "kanha"],
            img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 16,
            name: "Solving the Skies",
            date: "Mar 30, 2025",
            type: "past",
            shortDesc: "Participants: 27",
            longDesc: "The Aerospace Mystery Challenge. Participants investigated a fictional orbital collision to determine liability and technical failure points.",
            venue: "Briefing Room A",
            tags: ["investigation", "mystery", "aerospace"],
            img: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 15,
            name: "SkyCast Event",
            date: "Jan 6, 2025",
            type: "past",
            shortDesc: "Participants: 50+",
            longDesc: "In collaboration with Kanha House. A meteorology and satellite weather forecasting session during Margazhi 2025.",
            venue: "Rooftop Garden",
            tags: ["weather", "satellite", "kanha"],
            img: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 14,
            name: "Settlement Design Challenge",
            date: "Jan 4-5, 2025",
            type: "past",
            shortDesc: "Live Participants: 180+",
            longDesc: "Held during Margazhi 2025. The first major edition of our colony design Hackathon. Students built scale models of lunar bases.",
            venue: "Exhibition Hall",
            tags: ["design", "lunar", "margazhi"],
            img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 13,
            name: "Samvaad in Space",
            date: "Dec 3, 2024",
            type: "past",
            shortDesc: "Participants: 50 | Host: Veritas",
            longDesc: "A collaborative symposium with Veritas Oratory Society discussing the ethics of privatization in the space sector.",
            venue: "Conference Room",
            tags: ["debate", "ethics", "veritas"],
            img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 12,
            name: "Kosmic Nogging",
            date: "Aug 23, 2024",
            type: "past",
            shortDesc: "Participants: 200+",
            longDesc: "A brain-storming session and quiz event testing knowledge on interstellar phenomenons and sci-fi pop culture.",
            venue: "Main Hall",
            tags: ["quiz", "fun", "social"],
            img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 11,
            name: "Celestial Narrative",
            date: "Aug 15-26, 2024",
            type: "past",
            shortDesc: "Participants: 20+",
            longDesc: "A storytelling and creative writing workshop focused on hard science fiction and space opera genres.",
            venue: "Library Seminar Room",
            tags: ["writing", "story", "creative"],
            img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 10,
            name: "Lift Off in Paradox 2024",
            date: "June 1, 2024",
            type: "past",
            shortDesc: "Participants: 200+",
            longDesc: "A grand launch event for the new academic year, featuring water rocket competitions and a keynote by alumni.",
            venue: "Sports Ground",
            tags: ["launch", "rockets", "paradox"],
            img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 9,
            name: "High School to Cockpit",
            date: "May 18, 2024",
            type: "past",
            shortDesc: "Participants: 170+",
            longDesc: "Career guidance session for aspiring pilots. Captains from leading airlines shared their journey and tips for flight school.",
            venue: "Auditorium",
            tags: ["career", "pilot", "aviation"],
            img: "https://images.unsplash.com/photo-1524592714635-d77511a4834d?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 8,
            name: "Roadmap to ISRO",
            date: "May 5, 2024",
            type: "past",
            shortDesc: "Participants: 150+",
            longDesc: "Guest session featuring ISRO scientists. They discussed entrance exams, recruitment pathways, and life at the space agency.",
            venue: "Lecture Hall 1",
            tags: ["isro", "career", "guest"],
            img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 7,
            name: "Samvaad",
            date: "Apr 30, 2024",
            type: "past",
            shortDesc: "Participants: 40+",
            longDesc: "An intimate discussion circle focusing on recent developments in reusable launch vehicles.",
            venue: "Round Table Room",
            tags: ["discussion", "tech", "group"],
            img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 6,
            name: "Interaction Meet",
            date: "Feb 15, 2023",
            type: "past",
            shortDesc: "Participants: 40+",
            longDesc: "First community gathering of the year. Ice-breaking sessions and team formation for upcoming projects.",
            venue: "Student Centre",
            tags: ["community", "social", "meetup"],
            img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 5,
            name: "Guest Lecture",
            date: "Dec 10, 2023",
            type: "past",
            shortDesc: "Participants: 100+",
            longDesc: "Topic: 'Space Technology and Astronomy'. An expert lecture covering the fundamentals of modern satellite systems.",
            venue: "Virtual Event",
            tags: ["lecture", "learning", "tech"],
            img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 4,
            name: "Telescope Observations",
            date: "Oct 22, 2023",
            type: "past",
            shortDesc: "Participants: 120+",
            longDesc: "Observations using ground-based telescopes. We viewed Jupiter's moons and Saturn's rings on a clear autumn night.",
            venue: "Campus Roof",
            tags: ["stargazing", "telescope", "observation"],
            img: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            name: "Astronomy Quiz",
            date: "Sept 21, 2023",
            type: "past",
            shortDesc: "Participants: 60+",
            longDesc: "A competitive quiz testing members on constellations, nebulae, and space history. Winners received telescope time.",
            venue: "Classroom 4B",
            tags: ["quiz", "knowledge", "fun"],
            img: "https://images.unsplash.com/photo-1632515904675-8ceac60be67f?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            name: "Chandrayaan 3 Stream",
            date: "Aug 23, 2023",
            type: "past",
            shortDesc: "Participants: 170+",
            longDesc: "Live streaming event of the historic Chandrayaan 3 lunar landing. The room erupted in cheers as the lander touched down.",
            venue: "Main Auditorium",
            tags: ["isro", "live", "historic"],
            img: "https://images.unsplash.com/photo-1614728423169-3f65fd723619?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 1,
            name: "Airplane Crash Investigation",
            date: "Aug 12, 2023",
            type: "past",
            shortDesc: "Participants: 50+",
            longDesc: "Case study analysis of historical aviation accidents. We discussed the role of human error and mechanical failure.",
            venue: "Seminar Hall",
            tags: ["investigation", "safety", "case-study"],
            img: "https://images.unsplash.com/photo-1520183802803-06f731a2059f?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const filteredEvents = eventsData.filter(e => e.type === filter);
    const displayedEvents = isExpanded || filteredEvents.length <= 3 ? filteredEvents : filteredEvents.slice(0, 3);

    return (
        <Section id="events">
            {/* Background Saturn-like Planet */}
            <div className="absolute left-[5%] top-[5%] opacity-50 pointer-events-none z-0">
                <Planet
                    imgUrl="https://images.unsplash.com/photo-1614728423169-3f65fd723619?auto=format&fit=crop&q=80&w=800"
                    size="280px"
                    className="blur-[0.5px]"
                    hasRing={true}
                    ringColor="rgba(216, 180, 140, 0.4)"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0">Events Log</h2>

                    <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                        {['upcoming', 'past'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setFilter(tab);
                                    setIsExpanded(false); // Reset expansion when switching tabs
                                }}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === tab
                                    ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className={`grid grid-cols-1 ${displayedEvents.length === 0 ? 'place-items-center' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                    <AnimatePresence mode='popLayout'>
                        {displayedEvents.length > 0 ? (
                            displayedEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="col-span-full py-12 text-center"
                            >
                                <p className="text-xl text-cyan-400 font-mono tracking-wider animate-pulse">
                                    &gt; Upcoming event details are coming soon...
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Show Expand/Collapse button only if there are more than 3 items */}
                {filteredEvents.length > 3 && (
                    <motion.div layout className="flex justify-center mt-12">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-cyan-400 border border-cyan-500/50 px-8 py-3 rounded-full hover:bg-cyan-500/10 transition-all uppercase tracking-widest text-xs font-bold shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                        >
                            {isExpanded ? 'Collapse Log' : 'View Full Archive'}
                        </button>
                    </motion.div>
                )}
            </div>
        </Section>
    );
};

export default Events;
