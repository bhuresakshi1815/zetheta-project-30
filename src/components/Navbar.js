import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Archivo+Black&display=swap" rel="stylesheet" />
      
      <nav style={{ backgroundColor: '#205c79' }} className="text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#FF8C00' }}
            >
              <span 
                className="text-white font-bold text-xl"
                style={{ fontFamily: 'Archivo Black, sans-serif' }}
              >
                Z
              </span>
            </div>
            <div 
              className="text-2xl font-bold tracking-wide text-white"
              style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
              ZETHETA
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <button 
              className="px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.05] font-medium cursor-pointer"
              style={{ 
                backgroundColor: '#FF8C00',
                fontFamily: 'Poppins, sans-serif',
                color: 'white',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FFA500';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FF8C00';
              }}
              onClick={() => navigate('/about')}
            >
              About
            </button>
            <button 
              className="px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.05] font-medium cursor-pointer"
              style={{ 
                backgroundColor: '#f07d24',
                fontFamily: 'Poppins, sans-serif',
                color: 'white',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f69f1c';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f07d24';
              }}
              onClick={() => navigate('/contact')}
            >
              Contact
            </button>
            <button 
              className="px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.05] font-medium cursor-pointer"
              style={{ 
                backgroundColor: '#f07d24',
                fontFamily: 'Poppins, sans-serif',
                color: 'white',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f69f1c';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f07d24';
              }}
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button 
              className="px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.05] font-medium cursor-pointer"
              style={{ 
                backgroundColor: '#f07d24',
                fontFamily: 'Poppins, sans-serif',
                color: 'white',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f69f1c';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f07d24';
              }}
              onClick={() => navigate('/register')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;