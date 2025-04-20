import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
      <Link to="/" className="text-xl font-bold text-blue-600">Maktaba</Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4 text-sm">
       
        <a><Link to="/" className="hover:underline hover:text-blue-600">Home</Link></a>
        <a><Link to="/books" className="hover:underline hover:text-blue-600">Browse Books</Link></a>
        <a><Link to="/contactus" className="hover:underline hover:text-blue-600">Contact Us</Link></a>
        <a><Link to="/aboutus" className="hover:underline hover:text-blue-600">About Us</Link></a>
        

        {!isLoggedIn ? (
          <>
            <Link to="/auth" className="hover:text-blue-600">Account</Link>
            {/* <Link to="/auth" className="hover:text-blue-600">Register</Link> */}
            <a href="#" className="hover:text-blue-600">Cart</a>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
