// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import only Routes and Route
import Auth from './Auth';
import Home from './Home';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import Footer from './Footer';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import BrowseBooks from './Books';


const App = () => {
  return (
    <>
      {/* Navbar will always be visible */}
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to offset the fixed navbar */}
        {/* Routes to switch between pages */}
        <Routes>
          {/* <Route path="/" element={<Auth />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/books" element={<BrowseBooks />} />




        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
