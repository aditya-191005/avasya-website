'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Planet = ({ imgUrl, size, className, delay = 0, hasRing = false, ringColor = "rgba(255,255,255,0.4)" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
                rotate: hasRing ? [0, 3, -3, 0] : [0, 360]
            }}
            transition={{
                opacity: { duration: 1, delay },
                scale: { duration: 1, delay },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                rotate: hasRing
                    ? { duration: 12, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 200, repeat: Infinity, ease: "linear" }
            }}
            className={`absolute z-0 pointer-events-none flex items-center justify-center ${className}`}
            style={{
                width: size,
                height: size,
            }}
        >
            {/* Ring Element */}
            {hasRing && (
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] z-0"
                    style={{
                        width: '180%',
                        height: '50%',
                        border: `20px solid ${ringColor}`,
                        borderTopColor: 'transparent',
                        borderLeftColor: ringColor,
                        borderRightColor: ringColor,
                        borderBottomColor: ringColor,
                        transform: 'rotate(-15deg)',
                        boxShadow: `0 0 30px ${ringColor}, inset 0 0 20px ${ringColor}`,
                        opacity: 0.8
                    }}
                />
            )}

            {/* Planet Sphere */}
            <div
                className="absolute inset-0 rounded-full bg-cover bg-center z-10"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    boxShadow: 'inset -30px -30px 60px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.05)'
                }}
            />

            {/* Atmosphere Glow */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(6,182,212,0.15)] mix-blend-screen z-20" />
        </motion.div>
    );
};

export default Planet;
