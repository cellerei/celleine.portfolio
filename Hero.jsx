import React from 'react';
import heroimage from '../assets/profile.jpg';
import { TypeAnimation } from 'react-type-animation';
import Facebook from '../assets/facebook.png';
import Discord from '../assets/discord.png';
import Instagram from '../assets/instagram.png';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 rounded-lg max-w-[1200px] h-[70vh] mx-auto py-8 bg-yellow-200 font-mono'>
      <div className='my-auto mx-auto w-[255px] h-auto lg:w-[340px]'>
        <img 
          src={heroimage} 
          alt="heroimage"
          className="rounded-full w-full h-full object-cover" // Added styles for soft edges and shadow
        /> 
      </div>
  
      <div className='col-span-2 px-5 my-auto'>
        <h1 className="text-blue-400 font-extrabold text-4xl sm:text-5xl lg:text-7xl">
          <span className="bg-gradient-to-r from-red-400 to-orange-300 text-transparent bg-clip-text text-4xl sm:text-5xl lg:text-7xl">
            I'm 
          </span><br />
          <TypeAnimation
            sequence={[
              "Christelle Lareine",
              1000,
              "a Web Designer",
              1000,
              "a Computer Science Student",
              1000,
              "a CvSU Student",
              1000
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity} 
            className="text-4xl sm:text-5xl lg:text-7xl"
          />
        </h1>

        <p className="text-gray-950 sm:text-lg my-6 lg:text-xl font-bold">
          Hewo! Welcome to My Portfolio Website. I bring enthusiasm and a commitment to excellence to my development work, 
          combining creativity with a strong focus on quality.
        </p>

          {/* Social Media Icons with "Socials" Label */}
          <div className="flex justify-center md:justify-start items-center gap-4 mt-6">
            <a href="https://www.facebook.com/cellerei" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" className="w-10 h-10 md:w-12 md:h-12 transform hover:scale-110 transition duration-300 hover:shadow-[0px_0px_15px_3px_rgba(191,219,254,1)]" />
            </a>
            <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
              <img src={Discord} alt="Discord" className="w-10 h-10 md:w-12 md:h-12 transform hover:scale-110 transition duration-300 hover:shadow-[0px_0px_15px_3px_rgba(253,224,71,1)]" />
            </a>
            <a href="https://www.instagram.com/cellerei_/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="w-10 h-10 md:w-12 md:h-12 transform hover:scale-110 transition duration-300 hover:shadow-[0px_0px_15px_3px_rgba(233,213,255,1)]" />
            </a>
          </div>
      </div>

    </div>
  );
};

export default Hero;
