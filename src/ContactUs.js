import React from 'react';

const ContactUs = () => {
  return (
    <section className="px-4 py-16 bg-white text-gray-800">
                <h3 className="text-center text-blue-600 font-bold text-3xl mb-8">Contact Us</h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Talk to Us</h2>

          <ul className="space-y-4 text-sm">
            <li>
              <strong>Phone:</strong> +254 712 345678
            </li>
            <li>
              <strong>Location:</strong> 123 Library Ave, Nairobi, Kenya
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:info@maktaba.co.ke" className="text-blue-600 underline">info@maktaba.co.ke</a>
            </li>
            <li>
              <strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 5:00 PM
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-blue-500 hover:underline">Facebook</a>
              <a href="#" className="text-blue-400 hover:underline">Twitter</a>
              <a href="#" className="text-pink-500 hover:underline">Instagram</a>
              <a href="#" className="text-blue-700 hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                rows="5"
                placeholder="Type your message..."
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
