'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/ui/Section';
import TeamMember from '@/components/ui/TeamMember';
import Planet from '@/components/visuals/Planet';

const Crew = () => {
    const [activeCabin, setActiveCabin] = useState(null);

    const cabins = [
        {
            id: 'founding', name: "Command", members: [
                { name: "Sunidhi Jain", role: "Founder", quote: "Innovation is our fuel.", img: "/images/sunidhi.jpg", linkedin: "https://www.linkedin.com/in/sunidhi-jain-17aba4237" },
                { name: "Keshava ", role: "Secretary", quote: "To infinity and beyond.", img: "/images/keshava.jpg", linkedin: "https://www.linkedin.com/in/KLN12", email: "22f3002565@ds.study.iitm.ac.in" },
                { name: "Rohit", role: "Deputy Secretary", quote: "Supporting the mission.", img: "/images/rohit.jpeg", linkedin: "https://www.linkedin.com/in/rohitsharma1819", email: "23f2004708@ds.study.iitm.ac.in" },
                { name: "Aditya", role: "Website Developer", quote: "Innovation is our fuel.", img: "/images/aditya.jpg", linkedin: "https://www.linkedin.com/in/aditya-jangra-767632281", email: "aditya219jangra@gmail.com" }
            ]
        },
        {
            id: 'av', name: "Founders", members: [
                { name: "Sunidhi Jain", role: "Founder", quote: "Innovation is our fuel.", img: "/images/sunidhi.jpg", linkedin: "https://www.linkedin.com/in/sunidhi-jain-17aba4237" },
                { name: "Keshava ", role: "Founding Member", quote: "To infinity and beyond.", img: "/images/keshava.jpg", linkedin: "https://www.linkedin.com/in/KLN12", email: "22f3002565@ds.study.iitm.ac.in" },
                { name: "Shivam Sharma ", role: "Founding Member", quote: "To infinity and beyond.", img: "/images/shivam.jpeg", linkedin: "https://www.linkedin.com/in/theshivam7/", email: "22f3002256@ds.study.iitm.ac.in" },
                { name: "Ayush SK", role: "Founding Member", quote: "To infinity and beyond.", img: "/images/aayush.jpeg" },
                { name: "Parampreet Singh", role: "Founding Member", quote: "To infinity and beyond.", img: "/images/parampreet.jpeg", linkedin: "https://www.linkedin.com/in/param302", email: "22f3000797@ds.study.iitm.ac.in" },

            ]
        },
        {
            id: 'astro', name: "Head of Departments", members: [
                { name: "Aditya", role: "Web-OPS HOD", quote: "Innovation is our fuel.", img: "/images/aditya.jpg", linkedin: "https://www.linkedin.com/in/aditya-jangra-767632281", email: "aditya219jangra@gmail.com" },
                { name: "Kavisha", role: "EVENTS & ACTIVITIES HOD", quote: "Innovation is our fuel.", img: "/images/kavisha.jpeg", linkedin: "https://www.linkedin.com/in/kavishakapoor", email: "24f2004122@ds.study.iitm.ac.in" },
                { name: "Shruti", role: "DESIGN & CONTENT HOD", quote: "Innovation is our fuel.", img: "/images/shruti.jpeg", linkedin: "https://www.linkedin.com/in/shruti-pandey-06275230a", email: "25f3000775@ds.study.iitm.ac.in" },
                { name: "Foram", role: "PR &OUTREACH HOD", quote: "Innovation is our fuel.", img: "/images/foram.jpeg", linkedin: "https://www.linkedin.com/in/forammandali/", email: "25F2007763@ds.study.iitm.ac.in" }


            ]
        }
    ];

    return (
        <Section id="crew">
            {/* Background Earth-like Planet */}
            <div className="absolute right-[5%] top-[10%] opacity-60 pointer-events-none z-0">
                <Planet
                    imgUrl="https://images.unsplash.com/photo-1614732684435-37469772c724?auto=format&fit=crop&q=80&w=800"
                    size="320px"
                    className="blur-[0.5px]"
                />
            </div>

            <div className="max-w-7xl mx-auto w-full text-center z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">The Crew</h2>

                {/* Founders / Command always visible */}
                {/* Founders / Command always visible - 2 per row on all screens */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 justify-items-center">
                    {cabins[0].members.map((m, i) => <TeamMember key={i} {...m} />)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cabins.slice(1).map(cabin => (
                        <div key={cabin.id} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold text-white">{cabin.name} Deck</h3>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6">
                                {cabin.members.map((m, i) => <TeamMember key={i} {...m} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Crew;
