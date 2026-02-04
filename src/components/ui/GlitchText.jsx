'use client';
import React, { useState } from 'react';

const GlitchText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

    const scramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );
            if (iteration >= text.length) clearInterval(interval);
            iteration += 0.7;
        }, 30);
    };

    return (
        <span
            onMouseEnter={scramble}
            className={`inline-block font-mono cursor-default ${className}`}
        >
            {displayText}
        </span>
    );
};

export default GlitchText;
