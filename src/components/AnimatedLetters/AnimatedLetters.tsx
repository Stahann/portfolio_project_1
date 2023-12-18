import React from "react";

import './AnimatedLetters.scss'

interface AnimatedLettersProps {
    letterClass: string;
    strArray: string[];
    idx: number;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ letterClass, strArray, idx }) => {

    return (
        <span>       
            {strArray.map((letter: string, i: number) => (
                <span key={letter + i} className={`${letterClass} _${i + idx}`}>
                    {letter}
                </span>
            ))}
            
        </span>
    );
};

export default AnimatedLetters;