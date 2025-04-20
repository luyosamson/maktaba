import React from 'react';
import BookImage from './assets/book.webp';  // Correct the path based on where you put the image

const AboutUs = () => {
  return (
    <section className="px-4 py-16 bg-white text-gray-800">
      {/* Title Section */}
      <h3 className="text-center text-blue-600 font-bold text-3xl mb-8">About Us</h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div>
        <img
        src={BookImage}  // Use the imported variable here
        alt="Bookstore Image"
        className="w-full rounded-lg shadow-lg"
/>

        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-sm mb-6">
            Founded with a passion for books, Maktaba is your trusted online bookstore, where literature meets innovation.
            We started as a small community-driven project aimed at providing easy access to books for readers across Kenya.
            Today, we are proud to offer an extensive collection of books in various categories, from literature to self-development, and much more!
          </p>

          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <p className="text-sm mb-6">
            Our mission is to foster a culture of reading by making books accessible to all. We aim to enrich lives through the power of literature, 
            inspiring minds and connecting people through stories that challenge, empower, and entertain.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Vision</h3>
          <p className="text-sm mb-6">
            To become Africa’s leading online bookstore, dedicated to nurturing a generation of readers, writers, and thinkers who impact their communities positively.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
          <ul className="list-disc pl-5 text-sm mb-6">
            <li>Integrity: We uphold honesty, transparency, and accountability in all our dealings.</li>
            <li>Customer-Centric: Our customers are at the heart of everything we do. We strive to exceed their expectations.</li>
            <li>Innovation: Continuously evolving with new ideas, solutions, and the latest trends in the book industry.</li>
            <li>Community: We believe in giving back to the community by supporting literacy programs and education initiatives.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Our Delivery Promise</h3>
          <p className="text-sm mb-6">
            We understand how important timely delivery is, and we strive to ensure that all your book orders arrive at your doorstep promptly.
            With reliable delivery services, your books are carefully packed and shipped directly to you, anywhere in Kenya.
            Whether you’re in Nairobi, Kisumu, or Mombasa, we’ve got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
