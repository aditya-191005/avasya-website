'use client';
import React, { useState, useEffect } from 'react';

const CursorGlow = () => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
            style={{
                background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
            }}
        />
    );
};

export default CursorGlow;
