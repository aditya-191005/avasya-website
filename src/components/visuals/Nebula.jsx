'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Nebula = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
            animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
            animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
                x: [0, 50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen"
        />
    </div>
);

export default Nebula;
