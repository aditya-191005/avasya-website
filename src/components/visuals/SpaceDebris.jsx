'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpaceDebris = () => {
    const [debris, setDebris] = useState([]);

    useEffect(() => {
        const items = [...Array(6)].map((_, i) => ({
            id: i,
            size: Math.random() * 20 + 10,
            y: Math.random() * 100,
            duration: Math.random() * 30 + 30,
            delay: Math.random() * 10
        }));

        setDebris(items);
    }, []);

    if (!debris.length) return null; // prevents SSR mismatch

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {debris.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ x: -100, y: `${item.y}%`, rotate: 0 }}
                    animate={{ x: "120vw", rotate: 360 }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "linear",
                    }}
                    className="absolute opacity-30 text-stone-500"
                    style={{ width: item.size, height: item.size }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L4 8L6 18L16 22L20 14L18 6L12 2Z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

export default SpaceDebris;
