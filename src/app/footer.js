import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 p-8 sm:p-12 lg:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Freelancer</h2>
          <div className="flex items-center">
            <span className="text-2xl font-bold">$</span>
            <span className="text-5xl font-bold">19</span>
            <span className="text-sm ml-1">/mo</span>
          </div>
          <ul>
            <li>5 Psd files included</li>
            <li>37 hours files support</li>
            <li>50 Psd files support</li>
            <li>Multiple feature included</li>
            <li>100 element PSD + AI</li>
          </ul>
          <button className="btnFooter">Click Me</button>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="flex items-center">
            <span className="text-2xl font-bold">$</span>
            <span className="text-5xl font-bold">29</span>
            <span className="text-sm ml-1">/mo</span>
          </div>
          <ul>
            <li>5 Psd files included</li>
            <li>37 hours files support</li>
            <li>50 Psd files support</li>
            <li>Multiple feature included</li>
            <li>100 element PSD + AI</li>
          </ul>
          <button className="btnFooter">Click Me</button>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Service</h2>
          <div className="flex items-center">
            <span className="text-2xl font-bold">$</span>
            <span className="text-5xl font-bold">39</span>
            <span className="text-sm ml-1">/mo</span>
          </div>
          <ul>
            <li>5 Psd files included</li>
            <li>37 hours files support</li>
            <li>50 Psd files support</li>
            <li>Multiple feature included</li>
            <li>100 element PSD + AI</li>
          </ul>
          <button className="btnFooter">Click Me</button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <div className="flex items-center">
            <span className="text-2xl font-bold">$</span>
            <span className="text-5xl font-bold">49</span>
            <span className="text-sm ml-1">/mo</span>
          </div>
          <ul>
            <li>5 Psd files included</li>
            <li>37 hours files support</li>
            <li>50 Psd files support</li>
            <li>Multiple feature included</li>
            <li>100 element PSD + AI</li>
          </ul>
          <button className="btnFooter">Click Me</button>
        </div>
        {/* Social Media Icons */}
      </div>
      <div className="p-10">
        <hr className="my-4 divide-gray-300" />
      </div>

      <div className="flex justify-center mt-8">
        <a href="#" className="text-white mx-2 hover:text-gray-400">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-white mx-2 hover:text-gray-400">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-white mx-2 hover:text-gray-400">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-white mx-2 hover:text-gray-400">
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
