// features.js
import React from "react";
import Header from '../header'
import Link from 'next/link';

const Features = () => {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <Link href="/" passHref>
            <a>Go back to Home Page</a>
          </Link>
        </li>
      </ul>
      <h1>Features</h1>
      <p>This is the features page of our Next.js app.</p>
    </div>
  );
};

export default Features;
