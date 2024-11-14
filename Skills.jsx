import React from 'react';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import html from '../assets/html.png';
import mysql from '../assets/mysql.png'; 

const Skills = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-8 font-mono' id='Experience'>
      {/* Container for the title and stack icons with yellow background */}
      <div className='flex flex-col items-center bg-yellow-200'>
        
        {/* Title */}
        <h1 className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text md:text-7xl text-5xl font-extrabold mb-8">
          Experience
        </h1>

        <p className="text-gray-600 text-center sm:text-lg my-6 lg:text-xl">
          As a third-year computer science student, I'm still working on improving my skills in a variety of technologies 
          that are essential to web and software development. As I continue to improve my skills, these are the technologies 
          with which I have had the opportunity to work.
        </p>

        {/* Stack icons in responsive grid */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {/* Each technology item */}
          {[
            { src: html, alt: 'HTML', label: 'HTML' },
            { src: css, alt: 'CSS', label: 'CSS' },
            { src: javascript, alt: 'JavaScript', label: 'JavaScript' },
            { src: react, alt: 'React', label: 'React' },
            { src: tailwind, alt: 'Tailwind', label: 'Tailwind' },
            { src: mysql, alt: 'MySQL', label: 'MySQL' },
          ].map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.src} alt={tech.alt} className="w-[8rem] h-[8rem] transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#131110] rounded-md"/>
              <p className="mt-2 text-gray-800 font-extrabold">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
