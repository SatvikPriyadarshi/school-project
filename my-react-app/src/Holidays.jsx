import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Holiday = () => {
  const destinations = [
    {
      name: 'Bali, Indonesia',
      description: 'Beautiful beaches and vibrant culture.',
      imageUrl: './photo/bali.jpg',
    },
    {
      name: 'Seoul, South Korea',
      description: 'A bustling city with rich history.',
      imageUrl: './photo/seol.jpg',
    },
    {
      name: 'Paris, France',
      description: 'The city of love and lights.',
      imageUrl: './photo/paris.jpg',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <header className="bg-blue-900 text-white text-center p-8">
          <h1 className="text-4xl">Our Previous Holidays</h1>
          <p>Feel like a heaven with us, We provide best holidays trip to our students.</p>
        </header>

        <nav className="flex justify-around bg-gray-200 p-4">
          <a href="#reviews" className="text-blue-900">Reviews</a>
          <a href="#coverage" className="text-blue-900">Coverage Area</a>
          <a href="#about" className="text-blue-900">About Us</a>
          <a href="#contact" className="text-blue-900">Contact</a>
        </nav>

        <section className="flex justify-around p-4 overflow-x-auto">
          {destinations.map((destination, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img className="w-full h-3/6 object-cover" src={destination.imageUrl} alt={destination.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{destination.name}</div>
                <p className="text-gray-700 text-base">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <Footer/>
      </div>
    </>
  );
};

export default Holiday;
