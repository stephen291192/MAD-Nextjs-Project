// components/TestimonialWithPicture.js
import React from 'react';

const Testimonial = ({ testimonials }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight text-gray-900">What Our Clients Say</h2>
        <p className=" mb-5 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit magnis, vel
              varius euismod class convallis ut turpis commodo ad,dolor sit amet consectetur adipiscing elit magnis, vel
              varius euismod class convallis ut turpis commodo ad,
            </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((x, i) => (
            <div key={i} className="bg-gray p-6 rounded-md shadow-md">
              <p className="text-gray-700 mb-4">{x.feedback}</p>
              <div className="font-semibold">{x.name}</div>
              <div className="text-gray-500">{x.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
