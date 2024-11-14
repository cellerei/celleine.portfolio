import React, { useState, useEffect } from 'react';  
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    // Close mobile menu on window resize if width exceeds 768px (md breakpoint)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && nav) {
                setNav(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [nav]);

    return (
        <div className='bg-yellow-200 text-gray-800 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center font-mono  text-8xl'>   
            <h2 className='text-4xl bg-gradient-to-r from-red-400 to-orange-400 text-transparent 
            bg-clip-text md:text-5xl font-extrabold mb-8 ml-6'> Cellerei｡⋆୨୧❁˚ </h2>

            {/* Desktop menu */}
            <ul className='hidden md:flex'>
                <li className='p-5 text-lg font-bold'><a href='#about'>About</a></li>
                <li className='p-5 text-lg font-bold'><a href='#Experience'>Experience</a></li>
                <li className='p-5 text-lg font-bold'><a href='#contact'>Contact</a></li>
            </ul>

            {/* Mobile menu icon */}
            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            {/* Mobile menu */}
            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[30%] bg-[#deb89b] ease-in-out duration-500 font-mono rounded-lg shadow-lg' : 'fixed left-[-100%] font-mono'}>
                <ul className='flex flex-col p-5'>
                    <li onClick={handleNav} className='py-5 text-lg font-bold'><a href='#about'>About</a></li>
                    <li onClick={handleNav} className='py-5 text-lg font-bold'><a href='#Experience'>Experience</a></li>
                    <li onClick={handleNav} className='py-5 text-lg font-bold'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;


