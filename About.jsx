import React from 'react';
import about from '../assets/about.jpg';


const About = () => {
  return (
    <div className="text-gray-600 font-mono bg-yellow-200 rounded-lg max-w-[1200px] mx-auto my-12 p-6" id="about">
      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        
        {/* Image Section */}
        <div className="flex justify-center md:order-2 w-full md:w-1/2 mb-6 md:mb-0">
          <img className="rounded-3xl w-full max-w-[350px] sm:max-w-[450px] object-cover" src={about} alt="About me" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <h1 className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6">
            About Me
          </h1>  
          <p className="text-sm md:text-base lg:text-lg scale-110 px-4 md:px-0">
            Hi, My name is Christelle Lareine C. Jornales. I'm 20 years old and currently a 3rd year BSCS Student at Cavite State University-Bacoor Campus.
            The programming languages I've worked with and some of my previous projects are displayed on this website. In the tech industry, I'm constantly keen to learn more
            and investigate new prospects. I have a strong desire to increase my understanding of computer science and keep developing my abilities.
          </p>
        </div>         
      </div>
    </div>  
  );
}

export default About;
