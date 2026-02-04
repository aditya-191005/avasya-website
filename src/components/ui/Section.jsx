import React from 'react';

const Section = ({ children, className = "", id = "" }) => {
    return (
        <section id={id} className={`relative w-full min-h-screen flex flex-col justify-center py-20 px-4 md:px-12 lg:px-24 overflow-hidden ${className}`}>
            {children}
        </section>
    );
};

export default Section;
