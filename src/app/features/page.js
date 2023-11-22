// features.js
import React from "react";
import Header from '../header'
import Link from 'next/link';

import Footer from "../footer";
const Features = () => {
  return (
    <div>
    <Header />
    <div className="bg-gray-300 py-24 sm:py-20 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
            <h1 className="mt-2  text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Features Page            
            </h1>
            <h3 className="mt-5  text-2xl font-bold tracking-tight text-gray-500 sm:text-2xl">
              Coming Soon             
            </h3>
            <p className="mt-2 text-gray-500">Maintenance page</p>
            
          </div>
         
        </div>
      </div>
    <Footer />
  </div>
  );
};

export default Features;
