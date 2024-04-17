'use client'
import React, { useState, useEffect } from 'react';

interface AniProps {
    text: string[];
}

const Ani: React.FC<AniProps> = ({ text }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, 2000); // Change text every 2 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, [text]);

    return <p className="animated-text">{text[index]}</p>;
};

export default Ani;