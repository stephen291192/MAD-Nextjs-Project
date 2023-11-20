// components/TestimonialWithPicture.js
import React from 'react';

const Testimonial = () => {
  return (
    <div className="container mx-auto flex items-center justify-between p-10">
      {/* Left side (Testimonial) */}
      <div className="w-1/2 pr-8">
        <h2 className="text-2xl font-semibold">John Doe,</h2>
        <p className='mb-5'>Lorem ipsum dolor</p>
        <p className="text-gray-600">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <p className="text-gray-600 mt-2">
          More 
        </p>
      </div>

      {/* Right side (Picture) */}
      <div className="w-3/2">
        <img
          src="https://ifsacademy.org/assets/images/testimonial/cheerful-indian-guy-right.png"
          alt="Customer Picture"
          className="rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default Testimonial;
