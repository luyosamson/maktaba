// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h4 className="font-bold text-xl mb-2">Maktaba</h4>
          <p> Library Ave, Nairobi, Kenya</p>
          <p className="mt-1">Email: info@maktaba.co.ke</p>
          <p>Phone: +254 797 411980</p>
        </div>

        {/* Useful Links */}
        <div>
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="font-semibold mb-2">Follow Us</h5>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>

        {/* Newsletter (Optional) */}
        <div>
          <h5 className="font-semibold mb-2">Newsletter</h5>
          <p className="text-sm mb-2">Get the latest updates and offers.</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-2 py-1 rounded text-black"
          />
          <button className="mt-2 w-full bg-white text-blue-600 font-semibold py-1 rounded hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-blue-200">
        © {new Date().getFullYear()} Maktaba. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
