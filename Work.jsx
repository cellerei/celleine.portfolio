import React, { useState } from 'react';
import cafeDashboard from '../assets/cafe_dashboard.jpg';
import cafeLogin from '../assets/cafe_login.jpg';
import cafeOrder from '../assets/cafe_order.jpg';
import cafeReport from '../assets/cafe_report.jpg';
import cafeSettings from '../assets/cafe_settings.jpg';
import logInterface from '../assets/log_interface.jpg';
import logNotif from '../assets/log_notif.jpg';
import logNotif1 from '../assets/log_notif1.jpg';
import logRegister from '../assets/log_register.jpg';
import bellaPage from '../assets/bella_page.png';
import bellaLog from '../assets/bella_log.png';
import bellaAdd from '../assets/bella_add.png';
import bellaMenu from '../assets/bella-menu.png';
import bellaReserve from '../assets/bella_reserve.png';
import bellaReserve1 from '../assets/bella-reserve1.png';
import bellaEdit from '../assets/bella_edit.png';

const Work = () => {
  const [isCafeOpen, setIsCafeOpen] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isBellaOpen, setIsBellaOpen] = useState(false);
  const [currentCafeSlide, setCurrentCafeSlide] = useState(0);
  const [currentLogSlide, setCurrentLogSlide] = useState(0);
  const [currentBellaSlide, setCurrentBellaSlide] = useState(0);

  const cafeImages = [cafeDashboard, cafeLogin, cafeOrder, cafeReport, cafeSettings];
  const logImages = [logInterface, logNotif, logNotif1, logRegister];
  const bellaImages = [bellaPage, bellaLog, bellaAdd, bellaMenu, bellaReserve, bellaReserve1, bellaEdit];

  const toggleCafeModal = () => {
    setIsCafeOpen(!isCafeOpen);
    setCurrentCafeSlide(0);
  };

  const toggleLogModal = () => {
    setIsLogOpen(!isLogOpen);
    setCurrentLogSlide(0);
  };

  const toggleBellaModal = () => {
    setIsBellaOpen(!isBellaOpen);
    setCurrentBellaSlide(0);
  };

  const nextCafeSlide = () => setCurrentCafeSlide((prevSlide) => (prevSlide + 1) % cafeImages.length);
  const prevCafeSlide = () => setCurrentCafeSlide((prevSlide) => (prevSlide - 1 + cafeImages.length) % cafeImages.length);

  const nextLogSlide = () => setCurrentLogSlide((prevSlide) => (prevSlide + 1) % logImages.length);
  const prevLogSlide = () => setCurrentLogSlide((prevSlide) => (prevSlide - 1 + logImages.length) % logImages.length);

  const nextBellaSlide = () => setCurrentBellaSlide((prevSlide) => (prevSlide + 1) % bellaImages.length);
  const prevBellaSlide = () => setCurrentBellaSlide((prevSlide) => (prevSlide - 1 + bellaImages.length) % bellaImages.length);

  return (
    <div className='font-mono'>
      <div className='max-w-[1200px] mx-auto p-5 bg-yellow-200' id='work'>
        <div className='pb-8 text-center'>
          <h1 className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text md:text-7xl font-extrabold mb-8 ">
            Projects
          </h1>
          <p className='text-gray-600 sm:text-lg my-6 lg:text-xl'>
            Check out my Personal and School Projects
          </p>
        </div>

        <div className='flex justify-center gap-[10%]'>
          {/* Cafe Project */}
          <div 
            onClick={toggleCafeModal} 
            className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-orange-400 group rounded-md flex justify-center items-center w-[500px] h-[300px] bg-cover relative cursor-pointer'
          >
            <img src={cafeDashboard} alt="Cafe Project" className="w-full h-full object-cover" />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'> Cafe Project </span>
            </div>
          </div>

          {/* Log Project */}
          <div 
            onClick={toggleLogModal} 
            className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-orange-400 group rounded-md flex justify-center items-center w-[500px] h-[300px] bg-cover relative cursor-pointer'
          >
            <img src={logInterface} alt="Log Project" className="w-full h-full object-cover" />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'> Log Project </span>
            </div>
          </div>

          {/* BellaVita Project */}
          <div 
            onClick={toggleBellaModal} 
            className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-orange-400 group rounded-md flex justify-center items-center w-[500px] h-[300px] bg-cover relative cursor-pointer'
          >
            <img src={bellaPage} alt="BellaVita Project" className="w-full h-full object-cover" />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'> BellaVita Project </span>
            </div>
          </div>
        </div>

        {/* Modal for Cafe Project */}
        {isCafeOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
            <div className='relative w-[90vw] max-w-[800px] h-auto'>
              <img 
                src={cafeImages[currentCafeSlide]} 
                alt={`Cafe Slide ${currentCafeSlide + 1}`} 
                className='w-full h-auto max-h-[80vh] object-cover rounded-lg' 
              />
              <button 
                onClick={toggleCafeModal} 
                className='absolute top-4 right-4 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ✕
              </button>
              <button 
                onClick={prevCafeSlide} 
                className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ‹
              </button>
              <button 
                onClick={nextCafeSlide} 
                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* Modal for Log Project */}
        {isLogOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
            <div className='relative w-[90vw] max-w-[800px] h-auto'>
              <img 
                src={logImages[currentLogSlide]} 
                alt={`Log Slide ${currentLogSlide + 1}`} 
                className='w-full h-auto max-h-[80vh] object-cover rounded-lg' 
              />
              <button 
                onClick={toggleLogModal} 
                className='absolute top-4 right-4 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ✕
              </button>
              <button 
                onClick={prevLogSlide} 
                className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ‹
              </button>
              <button 
                onClick={nextLogSlide} 
                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* Modal for BellaVita Project */}
        {isBellaOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
            <div className='relative w-[90vw] max-w-[800px] h-auto'>
              <img 
                src={bellaImages[currentBellaSlide]} 
                alt={`BellaVita Slide ${currentBellaSlide + 1}`} 
                className='w-full h-auto max-h-[80vh] object-cover rounded-lg' 
              />
              <button 
                onClick={toggleBellaModal} 
                className='absolute top-4 right-4 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ✕
              </button>
              <button 
                onClick={prevBellaSlide} 
                className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ‹
              </button>
              <button 
                onClick={nextBellaSlide} 
                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
